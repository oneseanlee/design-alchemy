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
    const cleaned = val.replace(/[^0-9.-]/g, '');
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
  creditScore: z.object({
    current: z.union([z.number(), z.string(), z.null()]).transform(val => {
      if (val === 'Not Found' || !val) return undefined;
      const num = Number(val);
      return isNaN(num) ? undefined : num;
    }).optional(),
    range: looseString.optional(),
    factors: looseStringArr.optional(),
  }).optional(),

  paymentHistory: z.object({
    onTimePayments: looseNumber.optional(),
    latePayments: looseNumber.optional(),
    missedPayments: looseNumber.optional(),
    totalAccounts: looseNumber.optional(),
    percentageOnTime: looseNumber.optional(),
  }).optional(),

  creditUtilization: z.object({
    totalCredit: looseNumber.optional(),
    usedCredit: looseNumber.optional(),
    utilizationPercentage: looseNumber.optional(),
    recommendation: looseString.optional(),
  }).optional(),

  accounts: z.array(z.object({
    name: looseString.optional(),
    type: looseString.optional(),
    balance: looseNumber.optional(),
    creditLimit: looseNumber.optional(),
    status: looseString.optional(),
    paymentStatus: looseString.optional(),
    remarks: looseString.optional(),
    potentialViolation: looseString.optional(), // AI might send array, but we asked for string. If simple string fails, we might need more logic, but looseString handles primitives.
    bureaus: looseStringArr.optional(),
    crossBureauDiscrepancy: looseString.optional(),
  })).optional(),

  recommendations: z.array(z.object({
    priority: looseString.optional(),
    title: looseString.optional(),
    description: looseString.optional(),
    potentialImpact: looseString.optional(),
  })).optional(),

  debtToIncome: z.object({
    estimatedMonthlyDebt: looseNumber.optional(),
    ratio: looseString.optional(),
    assessment: looseString.optional(),
  }).optional(),

  fcraViolations: z.array(z.object({
    violationType: looseString.optional(),
    severity: looseString.optional(),
    accountName: looseString.optional(),
    accountNumber: looseString.optional(),
    currentBalance: looseNumber.optional(),
    expectedBalance: looseNumber.optional(),
    bureausAffected: looseStringArr.optional(),
    crossBureauDetails: looseString.optional(),
    issue: looseString.optional(),
    legalBasis: looseString.optional(),
    description: looseString.optional(),
    documentationNeeded: looseString.optional(),
    actionableSteps: looseString.optional(),
    legalCompensationPotential: looseString.optional(),
    recommendation: looseString.optional(),
  })).optional(),

  legalCaseSummary: z.object({
    totalViolationsFound: looseNumber.optional(),
    highPriorityViolations: looseNumber.optional(),
    estimatedCompensationPotential: looseString.optional(),
    attorneyReferralRecommended: z.boolean().or(z.string().transform(s => s === 'true')).optional(),
    nextSteps: looseString.optional(),
  }).optional(),

  summary: looseString.optional(),
});

export type AnalysisResult = z.infer<typeof analysisResultSchema>;
