import { z } from 'zod';

const looseString = z.union([z.string(), z.number(), z.boolean(), z.null(), z.undefined()])
  .transform(val => {
    if (val === null || val === undefined) return undefined;
    return String(val);
  });

const looseNumber = z.union([z.number(), z.string(), z.null(), z.undefined()])
  .transform(val => {
    if (val === null || val === undefined) return undefined;
    if (typeof val === 'number') return val;
    const cleaned = String(val).replace(/[^0-9.-]/g, '');
    const num = parseFloat(cleaned);
    return isNaN(num) ? 0 : num;
  });

const looseStringArr = z.union([z.array(z.string()), z.string(), z.null(), z.undefined()])
  .transform(val => {
    if (!val) return undefined;
    if (Array.isArray(val)) return val;
    return [String(val)];
  });

export const analysisResultSchema = z.object({
  reportSummary: z.object({
    reportDate: looseString.optional(),
    consumerName: looseString.optional(),
    totalAccountsAnalyzed: looseNumber.optional(),
    fileSource: looseString.optional(),
  }).optional(),

  accountAnalysis: z.array(z.object({
    accountName: looseString.optional(),
    accountNumber: looseString.optional(),
    status: looseString.optional(),
    balance: looseString.optional(),
    comments: looseString.optional(),
  })).optional(),

  fcraViolations: z.array(z.object({
    violationTitle: looseString.optional(),
    severity: looseString.optional(),
    accountsInvolved: looseStringArr.optional(),
    legalBasis: looseString.optional(),
    explanation: looseString.optional(),
    suggestedAction: looseString.optional(),
  })).optional(),

  legalSummary: z.object({
    totalViolations: looseNumber.optional(),
    attorneyReferralRecommended: z.boolean().or(z.string().transform(s => s === 'true')).optional(),
    estimatedDamagesPotential: looseString.optional(),
  }).optional(),

  summary: looseString.optional(),
});

export type AnalysisResult = z.infer<typeof analysisResultSchema>;
