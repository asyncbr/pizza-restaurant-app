import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import { siteConfig } from '@/lib/site';

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
  locale?: string;
};

function isNonEmptyString(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0;
}

function sanitize(value: unknown) {
  return typeof value === 'string' ? value.trim() : '';
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ ok: true } | { error: string }>
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const body = (req.body ?? {}) as ContactPayload;
  const name = sanitize(body.name);
  const email = sanitize(body.email);
  const phone = sanitize(body.phone);
  const subject = sanitize(body.subject);
  const message = sanitize(body.message);
  const locale = sanitize(body.locale) || 'pt-BR';

  if (
    !isNonEmptyString(name) ||
    !isNonEmptyString(email) ||
    !isValidEmail(email) ||
    !isNonEmptyString(phone) ||
    !isNonEmptyString(subject) ||
    !isNonEmptyString(message)
  ) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
  const smtpPort = Number(process.env.SMTP_PORT || '465');
  const smtpSecure = process.env.SMTP_SECURE
    ? process.env.SMTP_SECURE === 'true'
    : smtpPort === 465;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const smtpFrom = process.env.SMTP_FROM || smtpUser;

  if (!smtpUser || !smtpPass || !smtpFrom) {
    return res.status(500).json({ error: 'SMTP is not configured' });
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpSecure,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  const recipient = process.env.CONTACT_EMAIL_TO || siteConfig.contactEmail;
  const emailSubject = `Novo contato do site - ${subject}`;
  const text = [
    `Nome: ${name}`,
    `Email: ${email}`,
    `Telefone: ${phone}`,
    `Assunto: ${subject}`,
    `Locale: ${locale}`,
    `Mensagem: ${message}`,
  ].join('\n');

  const html = `
    <div style="font-family: Arial, Helvetica, sans-serif; color: #2a2019; line-height: 1.6;">
      <h2 style="margin-bottom: 16px;">Novo contato do site</h2>
      <p><strong>Nome:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Telefone:</strong> ${phone}</p>
      <p><strong>Assunto:</strong> ${subject}</p>
      <p><strong>Locale:</strong> ${locale}</p>
      <p><strong>Mensagem:</strong><br/>${message}</p>
    </div>
  `;

  await transporter.sendMail({
    from: smtpFrom,
    to: recipient,
    replyTo: email,
    subject: emailSubject,
    text,
    html,
  });

  return res.status(200).json({ ok: true });
}
