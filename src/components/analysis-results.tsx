'use client';

import { ArrowLeft, AlertTriangle, CheckCircle, Shield, FileText, Scale, Gavel, BookOpen, FileWarning, Clock, Copy, UserX, DollarSign, Building, Phone, AlertOctagon } from 'lucide-react';
import { AnalysisResult } from '@/lib/analysis-schema';
import { BookCallCTA } from '@/components/book-call-cta';
import { useLead } from '@/lib/lead-context';
import { useEffect } from 'react';

interface AnalysisResultsProps {
  results: AnalysisResult;
  onReset: () => void;
}

export default function AnalysisResults({ results, onReset }: AnalysisResultsProps) {
  const { lead, updateLead } = useLead();

  const getSeverityColor = (severity: string) => {
    if (severity === 'High' || severity === 'Critical') return 'border-red-600 bg-red-50';
    if (severity === 'Medium') return 'border-yellow-500 bg-yellow-50';
    return 'border-blue-500 bg-blue-50';
  };

  const getSeverityBadgeColor = (severity: string) => {
    if (severity === 'High' || severity === 'Critical') return 'bg-red-200 text-red-900';
    if (severity === 'Medium') return 'bg-yellow-200 text-yellow-900';
    return 'bg-blue-200 text-blue-900';
  };

  const getSeverityIcon = (severity: string) => {
    if (severity === 'High' || severity === 'Critical') return <AlertTriangle className="w-5 h-5 text-red-500" />;
    if (severity === 'Medium') return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
    return <AlertTriangle className="w-5 h-5 text-blue-500" />;
  };

  const getDamagesPotentialColor = (potential: string) => {
    if (potential === 'Significant' || potential === 'Substantial') return 'text-green-400';
    if (potential === 'Moderate') return 'text-yellow-400';
    return 'text-neutral-400';
  };

  const fcraViolations = results?.fcraViolations ?? [];
  const fdcpaViolations = results?.fdcpaViolations ?? [];
  const debtBuyerIssues = results?.debtBuyerIssues ?? [];
  const priorityViolations = results?.priorityViolations;
  
  // Count priority violations
  const duplicateCount = priorityViolations?.duplicateAccounts?.length ?? 0;
  const identityTheftCount = priorityViolations?.identityTheftAccounts?.length ?? 0;
  const wrongBalanceCount = priorityViolations?.wrongBalanceAccounts?.length ?? 0;
  const postBankruptcyCount = priorityViolations?.postBankruptcyViolations?.length ?? 0;
  const cancelledDebtCount = priorityViolations?.cancelledDebt1099C?.length ?? 0;
  const tcpaCount = priorityViolations?.tcpaViolations?.length ?? 0;
  const totalPriorityViolations = duplicateCount + identityTheftCount + wrongBalanceCount + postBankruptcyCount + cancelledDebtCount + tcpaCount;
  
  const totalViolations = results?.legalSummary?.totalViolations ?? (fcraViolations.length + fdcpaViolations.length + totalPriorityViolations);
  const highSeverityCount = results?.legalSummary?.highSeverityCount ?? 
    [...fcraViolations, ...fdcpaViolations].filter(v => v?.severity === 'High').length + totalPriorityViolations;
  const mediumSeverityCount = results?.legalSummary?.mediumSeverityCount ?? 
    [...fcraViolations, ...fdcpaViolations].filter(v => v?.severity === 'Medium').length;

  const calculatePotentialDamages = () => {
    const basePerViolation = 1000;
    const highMultiplier = 3;
    const mediumMultiplier = 2;
    const tcpaDamages = tcpaCount * 500; // $500-$1500 per TCPA violation
    return (highSeverityCount * basePerViolation * highMultiplier) + 
           (mediumSeverityCount * basePerViolation * mediumMultiplier) + 
           ((totalViolations - highSeverityCount - mediumSeverityCount) * basePerViolation) +
           tcpaDamages;
  };

  const potentialDamages = calculatePotentialDamages();

  useEffect(() => {
    if (lead && totalViolations >= 0) {
      updateLead({ analysisCompleted: true, violationsFound: totalViolations });
    }
  }, [totalViolations]);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 relative overflow-hidden">
      <div className="fixed inset-0 -z-10 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(244, 63, 94, 0.15) 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, rgba(251, 113, 133, 0.15) 0%, transparent 50%)`
        }}></div>
      </div>

      <header className="sticky top-0 z-50 backdrop-blur-md bg-neutral-950/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <button onClick={onReset} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Analyze New Report</span>
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-neutral-100 mb-4">FCRA & FDCPA Violation Analysis</h1>
          <p className="text-lg text-neutral-300">Comprehensive legal exposure assessment with actionable dispute guidance</p>
        </div>

        {/* Legal Exposure Summary */}
        <div className={`rounded-2xl shadow-2xl p-8 mb-8 text-white border-4 ${
          totalViolations > 0 
            ? 'bg-gradient-to-r from-red-600 to-red-700 border-red-800' 
            : 'bg-gradient-to-r from-green-600 to-green-700 border-green-800'
        }`}>
          <div className="flex items-center gap-3 mb-6">
            <Scale className="w-10 h-10" />
            <div>
              <h2 className="text-3xl font-bold">Legal Exposure Summary</h2>
              <p className="text-white/80 mt-1">
                {totalViolations > 0 ? 'Violations Detected - Legal Action May Be Warranted' : 'No Violations Detected'}
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-5 gap-4 mb-6">
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
              <p className="text-white/80 text-sm mb-1">FCRA Violations</p>
              <p className="text-4xl font-bold">{results?.legalSummary?.totalFcraViolations ?? fcraViolations.length}</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
              <p className="text-white/80 text-sm mb-1">FDCPA Violations</p>
              <p className="text-4xl font-bold">{results?.legalSummary?.totalFdcpaViolations ?? fdcpaViolations.length}</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
              <p className="text-white/80 text-sm mb-1">High Severity</p>
              <p className="text-4xl font-bold">{highSeverityCount}</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
              <p className="text-white/80 text-sm mb-1">Damages Potential</p>
              <p className={`text-2xl font-bold ${getDamagesPotentialColor(results?.legalSummary?.estimatedDamagesPotential ?? 'Low')}`}>
                {results?.legalSummary?.estimatedDamagesPotential ?? 'Low'}
              </p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
              <p className="text-white/80 text-sm mb-1">Est. Damages Range</p>
              <p className="text-xl font-bold">{results?.legalSummary?.estimatedDamagesRange ?? `$${potentialDamages.toLocaleString()}`}</p>
            </div>
          </div>
          {results?.legalSummary?.attorneyReferralRecommended && (
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border-2 border-white/30">
              <div className="flex items-center gap-3 mb-2">
                <Gavel className="w-6 h-6" />
                <h3 className="font-bold text-xl">Attorney Referral Recommended</h3>
              </div>
              <p className="text-white/90">Based on the violations found, consulting with a consumer rights attorney is strongly recommended.</p>
            </div>
          )}
        </div>

        {/* Report Summary */}
        {results?.reportSummary && (
          <div className="rounded-2xl bg-neutral-900/60 backdrop-blur-md border border-white/10 p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-8 h-8 text-rose-500" />
              <h2 className="text-2xl font-bold text-neutral-100">Report Summary</h2>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="p-4 bg-neutral-800 rounded-lg border border-neutral-700">
                <p className="text-sm text-neutral-400 mb-1">Consumer Name</p>
                <p className="text-lg font-semibold text-neutral-100">{results.reportSummary.consumerName ?? 'Not specified'}</p>
              </div>
              <div className="p-4 bg-neutral-800 rounded-lg border border-neutral-700">
                <p className="text-sm text-neutral-400 mb-1">Report Date</p>
                <p className="text-lg font-semibold text-neutral-100">{results.reportSummary.reportDate ?? 'Not specified'}</p>
              </div>
              <div className="p-4 bg-neutral-800 rounded-lg border border-neutral-700">
                <p className="text-sm text-neutral-400 mb-1">Accounts Analyzed</p>
                <p className="text-lg font-semibold text-neutral-100">{results.reportSummary.totalAccountsAnalyzed ?? 0}</p>
              </div>
              <div className="p-4 bg-neutral-800 rounded-lg border border-neutral-700">
                <p className="text-sm text-neutral-400 mb-1">Source Bureau(s)</p>
                <p className="text-lg font-semibold text-neutral-100">{results.reportSummary.fileSource ?? 'Unknown'}</p>
              </div>
            </div>
          </div>
        )}

        {/* Priority Violations Section */}
        {totalPriorityViolations > 0 && (
          <div className="rounded-2xl bg-neutral-900/60 backdrop-blur-md border-2 border-rose-500 p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <AlertOctagon className="w-8 h-8 text-rose-400" />
              <div>
                <h2 className="text-2xl font-bold text-neutral-100">Priority Violations Detected</h2>
                <p className="text-sm text-rose-300">These are the most critical issues requiring immediate attention</p>
              </div>
            </div>

            {/* Duplicate Accounts */}
            {duplicateCount > 0 && (
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Copy className="w-5 h-5 text-red-400" />
                  <h3 className="text-lg font-bold text-red-400">Duplicate Account Reporting ({duplicateCount})</h3>
                  <span className="px-2 py-1 text-xs font-bold bg-red-600 text-white rounded">HIGH SEVERITY</span>
                </div>
                <div className="bg-red-950/50 border-l-4 border-red-500 p-4 mb-3 rounded-r-lg">
                  <p className="text-sm text-red-200"><strong>Legal Basis:</strong> 15 U.S.C. § 1681e(b) - Maximum Possible Accuracy</p>
                  <p className="text-sm text-red-300 mt-1">Same debt is being reported multiple times, artificially inflating your debt.</p>
                </div>
                <div className="space-y-3">
                  {priorityViolations?.duplicateAccounts?.map((dup, idx) => (
                    <div key={idx} className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm font-semibold text-red-900">Original Creditor:</p>
                          <p className="text-sm text-red-800">{dup.originalCreditor ?? 'Unknown'} - {dup.originalBalance ?? 'N/A'}</p>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-red-900">Collection Agency:</p>
                          <p className="text-sm text-red-800">{dup.collectionAgency ?? 'Unknown'} - {dup.collectionBalance ?? 'N/A'}</p>
                        </div>
                      </div>
                      {dup.explanation && <p className="text-sm text-red-700 mt-2">{dup.explanation}</p>}
                      <div className="mt-3 bg-blue-50 p-3 rounded border border-blue-200">
                        <p className="text-xs font-bold text-blue-900">DISPUTE LANGUAGE:</p>
                        <p className="text-xs text-blue-800 italic">"This account is a duplicate. The same debt is reported by both the original creditor and the collection agency, violating 15 U.S.C. § 1681e(b). Delete this duplicate entry immediately."</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Identity Theft */}
            {identityTheftCount > 0 && (
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <UserX className="w-5 h-5 text-purple-400" />
                  <h3 className="text-lg font-bold text-purple-400">Identity Theft / Unauthorized Accounts ({identityTheftCount})</h3>
                  <span className="px-2 py-1 text-xs font-bold bg-purple-600 text-white rounded">CRITICAL</span>
                </div>
                <div className="bg-purple-950/50 border-l-4 border-purple-500 p-4 mb-3 rounded-r-lg">
                  <p className="text-sm text-purple-200"><strong>Legal Basis:</strong> 15 U.S.C. § 1681c-2 - Block of Information Resulting from Identity Theft</p>
                  <p className="text-sm text-purple-300 mt-1">Accounts you did not open or authorize. Must be blocked within 4 business days.</p>
                </div>
                <div className="space-y-3">
                  {priorityViolations?.identityTheftAccounts?.map((acct, idx) => (
                    <div key={idx} className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-lg">
                      <p className="text-sm font-semibold text-purple-900">{acct.accountName ?? 'Unknown Account'}</p>
                      {acct.accountNumber && <p className="text-xs text-purple-700">Account #: ***{acct.accountNumber}</p>}
                      {acct.dateOpened && <p className="text-xs text-purple-700">Opened: {acct.dateOpened}</p>}
                      <p className="text-sm text-purple-800 mt-2">{acct.reason ?? 'Account not recognized by consumer'}</p>
                      <div className="mt-3 bg-blue-50 p-3 rounded border border-blue-200">
                        <p className="text-xs font-bold text-blue-900">DISPUTE LANGUAGE:</p>
                        <p className="text-xs text-blue-800 italic">"This account is the result of identity theft. I did not open this account. Pursuant to 15 U.S.C. § 1681c-2, block and remove this fraudulent account within 4 business days."</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Wrong Balances */}
            {wrongBalanceCount > 0 && (
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <DollarSign className="w-5 h-5 text-yellow-400" />
                  <h3 className="text-lg font-bold text-yellow-400">Incorrect Balances on Paid/Settled Accounts ({wrongBalanceCount})</h3>
                  <span className="px-2 py-1 text-xs font-bold bg-yellow-600 text-white rounded">HIGH SEVERITY</span>
                </div>
                <div className="bg-yellow-950/50 border-l-4 border-yellow-500 p-4 mb-3 rounded-r-lg">
                  <p className="text-sm text-yellow-200"><strong>Legal Basis:</strong> 15 U.S.C. § 1681e(b) / § 1681s-2(a)</p>
                  <p className="text-sm text-yellow-300 mt-1">Paid or settled accounts must show $0 balance.</p>
                </div>
                <div className="space-y-3">
                  {priorityViolations?.wrongBalanceAccounts?.map((acct, idx) => (
                    <div key={idx} className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                      <p className="text-sm font-semibold text-yellow-900">{acct.accountName ?? 'Unknown Account'}</p>
                      <div className="grid md:grid-cols-2 gap-2 mt-2">
                        <p className="text-sm text-yellow-800"><strong>Reported Balance:</strong> {acct.reportedBalance ?? 'N/A'}</p>
                        <p className="text-sm text-green-700"><strong>Should Be:</strong> {acct.shouldBe ?? '$0'}</p>
                      </div>
                      <p className="text-sm text-yellow-700 mt-2">Status: {acct.status ?? 'Paid'}</p>
                      {acct.explanation && <p className="text-sm text-yellow-800 mt-1">{acct.explanation}</p>}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Post-Bankruptcy Violations */}
            {postBankruptcyCount > 0 && (
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Building className="w-5 h-5 text-blue-400" />
                  <h3 className="text-lg font-bold text-blue-400">Post-Bankruptcy Reporting Violations ({postBankruptcyCount})</h3>
                  <span className="px-2 py-1 text-xs font-bold bg-blue-600 text-white rounded">HIGH SEVERITY</span>
                </div>
                <div className="bg-blue-950/50 border-l-4 border-blue-500 p-4 mb-3 rounded-r-lg">
                  <p className="text-sm text-blue-200"><strong>Legal Basis:</strong> 15 U.S.C. § 1681e(b) + 11 U.S.C. § 524 (Discharge Injunction)</p>
                  <p className="text-sm text-blue-300 mt-1">Discharged accounts must show $0 balance, $0 payment, $0 past due.</p>
                </div>
                <div className="space-y-3">
                  {priorityViolations?.postBankruptcyViolations?.map((acct, idx) => (
                    <div key={idx} className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                      <p className="text-sm font-semibold text-blue-900">{acct.accountName ?? 'Unknown Account'}</p>
                      <div className="grid md:grid-cols-3 gap-2 mt-2">
                        <p className="text-sm text-blue-800"><strong>Balance:</strong> {acct.reportedBalance ?? 'N/A'}</p>
                        <p className="text-sm text-blue-800"><strong>Payment:</strong> {acct.reportedPayment ?? 'N/A'}</p>
                        <p className="text-sm text-blue-800"><strong>Past Due:</strong> {acct.reportedPastDue ?? 'N/A'}</p>
                      </div>
                      {acct.bankruptcyDischargeDate && (
                        <p className="text-sm text-blue-700 mt-2">Discharge Date: {acct.bankruptcyDischargeDate}</p>
                      )}
                      {acct.explanation && <p className="text-sm text-blue-800 mt-1">{acct.explanation}</p>}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 1099-C Cancelled Debt */}
            {cancelledDebtCount > 0 && (
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <FileWarning className="w-5 h-5 text-orange-400" />
                  <h3 className="text-lg font-bold text-orange-400">1099-C Cancelled Debt Issues ({cancelledDebtCount})</h3>
                  <span className="px-2 py-1 text-xs font-bold bg-orange-600 text-white rounded">HIGH SEVERITY</span>
                </div>
                <div className="bg-orange-950/50 border-l-4 border-orange-500 p-4 mb-3 rounded-r-lg">
                  <p className="text-sm text-orange-200"><strong>Legal Basis:</strong> 15 U.S.C. § 1681e(b)</p>
                  <p className="text-sm text-orange-300 mt-1">When 1099-C is issued, debt is cancelled - balance must be $0. Note: You may NOT be required to report this as taxable income.</p>
                </div>
                <div className="space-y-3">
                  {priorityViolations?.cancelledDebt1099C?.map((acct, idx) => (
                    <div key={idx} className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg">
                      <p className="text-sm font-semibold text-orange-900">{acct.accountName ?? 'Unknown Account'}</p>
                      <p className="text-sm text-orange-800 mt-1"><strong>Reported Balance:</strong> {acct.reportedBalance ?? 'N/A'} (should be $0)</p>
                      {acct.chargeOffDate && <p className="text-sm text-orange-700">Charge-off Date: {acct.chargeOffDate}</p>}
                      {acct.explanation && <p className="text-sm text-orange-800 mt-1">{acct.explanation}</p>}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TCPA Violations */}
            {tcpaCount > 0 && (
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Phone className="w-5 h-5 text-green-400" />
                  <h3 className="text-lg font-bold text-green-400">TCPA Robocall/Harassment Violations ({tcpaCount})</h3>
                  <span className="px-2 py-1 text-xs font-bold bg-green-600 text-white rounded">$500-$1,500 PER CALL</span>
                </div>
                <div className="bg-green-950/50 border-l-4 border-green-500 p-4 mb-3 rounded-r-lg">
                  <p className="text-sm text-green-200"><strong>Legal Basis:</strong> 47 U.S.C. § 227 (Telephone Consumer Protection Act)</p>
                  <p className="text-sm text-green-300 mt-1">Each unwanted robocall or text = $500-$1,500 in damages. Document all calls!</p>
                </div>
                <div className="space-y-3">
                  {priorityViolations?.tcpaViolations?.map((viol, idx) => (
                    <div key={idx} className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                      <p className="text-sm font-semibold text-green-900">{viol.collectorName ?? 'Unknown Collector'}</p>
                      <p className="text-sm text-green-800 mt-1"><strong>Type:</strong> {viol.violationType ?? 'Robocall/Harassment'}</p>
                      {viol.evidence && <p className="text-sm text-green-700 mt-1"><strong>Evidence:</strong> {viol.evidence}</p>}
                      {viol.estimatedCalls && (
                        <p className="text-sm text-green-900 font-bold mt-2">
                          Estimated Damages: ${(viol.estimatedCalls * 500).toLocaleString()} - ${(viol.estimatedCalls * 1500).toLocaleString()}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* FCRA Violations */}
        {fcraViolations.length > 0 && (
          <div className="rounded-2xl bg-neutral-900/60 backdrop-blur-md border-2 border-red-500/50 p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-red-400" />
              <h2 className="text-2xl font-bold text-neutral-100">FCRA Violations (Credit Reporting)</h2>
            </div>
            <div className="bg-red-950/50 border-l-4 border-red-600 p-4 mb-6 rounded-r-lg">
              <p className="text-sm text-red-200 font-medium">
                <strong>Legal Basis:</strong> Fair Credit Reporting Act (15 U.S.C. § 1681)
              </p>
              <p className="text-sm text-red-300 mt-2">
                These violations may entitle you to $100-$1,000 per violation in statutory damages, plus actual damages and attorney fees.
              </p>
            </div>
            <div className="space-y-6">
              {fcraViolations.map((violation, idx) => (
                <div key={idx} className={`border-l-4 p-6 rounded-r-xl ${getSeverityColor(violation?.severity ?? 'Low')}`}>
                  <div className="flex items-start gap-3">
                    {getSeverityIcon(violation?.severity ?? 'Low')}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${getSeverityBadgeColor(violation?.severity ?? 'Low')}`}>
                          {violation?.severity ?? 'Low'} Severity
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-200 text-purple-900">
                          {violation?.violationTitle ?? 'Unknown Violation'}
                        </span>
                        {violation?.statuteSection && (
                          <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-200 text-blue-900">
                            {violation.statuteSection}
                          </span>
                        )}
                      </div>

                      {violation?.accountsInvolved && violation.accountsInvolved.length > 0 && (
                        <div className="mb-4">
                          <p className="text-sm font-semibold text-gray-800 mb-2">Accounts Involved:</p>
                          <div className="flex flex-wrap gap-2">
                            {violation.accountsInvolved.map((account, aIdx) => (
                              <span key={aIdx} className="px-3 py-1 rounded-full text-xs font-medium bg-gray-200 text-gray-800">{account}</span>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="bg-gray-100 p-4 rounded-lg border border-gray-300 mb-4">
                        <p className="text-sm font-semibold text-gray-800 mb-1">Legal Citation:</p>
                        <p className="text-sm text-gray-700 font-mono">{violation?.legalBasis ?? 'Not specified'}</p>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-gray-200 mb-4">
                        <p className="text-sm font-semibold text-gray-800 mb-1">Violation Explanation:</p>
                        <p className="text-sm text-gray-700">{violation?.explanation ?? 'No explanation provided'}</p>
                      </div>

                      {violation?.disputeLanguage && (
                        <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-300 mb-4">
                          <p className="text-sm font-bold text-blue-900 mb-2 flex items-center gap-2">
                            <BookOpen className="w-4 h-4" />
                            Dispute Letter Language:
                          </p>
                          <p className="text-sm text-blue-800 italic">"{violation.disputeLanguage}"</p>
                        </div>
                      )}

                      <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-4 rounded-lg border-2 border-green-400">
                        <p className="text-sm font-bold text-green-900 mb-2 flex items-center gap-2">
                          <CheckCircle className="w-4 h-4" />
                          Suggested Action:
                        </p>
                        <p className="text-sm text-green-800 whitespace-pre-line">{violation?.suggestedAction ?? 'Contact a consumer rights attorney.'}</p>
                      </div>

                      {violation?.estimatedDamages && (
                        <div className="mt-4 text-sm text-gray-600">
                          <strong>Estimated Damages:</strong> {violation.estimatedDamages}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FDCPA Violations */}
        {fdcpaViolations.length > 0 && (
          <div className="rounded-2xl bg-neutral-900/60 backdrop-blur-md border-2 border-orange-500/50 p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <FileWarning className="w-8 h-8 text-orange-400" />
              <h2 className="text-2xl font-bold text-neutral-100">FDCPA Violations (Debt Collection)</h2>
            </div>
            <div className="bg-orange-950/50 border-l-4 border-orange-600 p-4 mb-6 rounded-r-lg">
              <p className="text-sm text-orange-200 font-medium">
                <strong>Legal Basis:</strong> Fair Debt Collection Practices Act (15 U.S.C. § 1692)
              </p>
              <p className="text-sm text-orange-300 mt-2">
                FDCPA violations may entitle you to up to $1,000 per lawsuit plus actual damages and attorney fees.
              </p>
            </div>
            <div className="space-y-6">
              {fdcpaViolations.map((violation, idx) => (
                <div key={idx} className={`border-l-4 p-6 rounded-r-xl ${getSeverityColor(violation?.severity ?? 'Low')}`}>
                  <div className="flex items-start gap-3">
                    {getSeverityIcon(violation?.severity ?? 'Low')}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${getSeverityBadgeColor(violation?.severity ?? 'Low')}`}>
                          {violation?.severity ?? 'Low'} Severity
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-200 text-orange-900">
                          {violation?.violationTitle ?? 'Unknown Violation'}
                        </span>
                        {violation?.collectorName && (
                          <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-200 text-gray-800">
                            Collector: {violation.collectorName}
                          </span>
                        )}
                      </div>

                      <div className="bg-gray-100 p-4 rounded-lg border border-gray-300 mb-4">
                        <p className="text-sm font-semibold text-gray-800 mb-1">Legal Citation:</p>
                        <p className="text-sm text-gray-700 font-mono">{violation?.legalBasis ?? 'Not specified'}</p>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-gray-200 mb-4">
                        <p className="text-sm text-gray-700">{violation?.explanation ?? 'No explanation provided'}</p>
                      </div>

                      {violation?.disputeLanguage && (
                        <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-300 mb-4">
                          <p className="text-sm font-bold text-blue-900 mb-2">Dispute Language:</p>
                          <p className="text-sm text-blue-800 italic">"{violation.disputeLanguage}"</p>
                        </div>
                      )}

                      <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-4 rounded-lg border-2 border-green-400">
                        <p className="text-sm font-bold text-green-900 mb-2 flex items-center gap-2">
                          <CheckCircle className="w-4 h-4" />
                          Suggested Action:
                        </p>
                        <p className="text-sm text-green-800 whitespace-pre-line">{violation?.suggestedAction ?? 'Contact a consumer rights attorney.'}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Debt Buyer Issues */}
        {debtBuyerIssues.length > 0 && (
          <div className="rounded-2xl bg-neutral-900/60 backdrop-blur-md border-2 border-purple-500/50 p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-8 h-8 text-purple-400" />
              <h2 className="text-2xl font-bold text-neutral-100">Debt Buyer / Chain of Title Issues</h2>
            </div>
            <div className="space-y-4">
              {debtBuyerIssues.map((issue, idx) => (
                <div key={idx} className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-xl">
                  <h4 className="font-bold text-purple-900 mb-2">{issue?.issueTitle}</h4>
                  <p className="text-sm text-purple-800 mb-3">{issue?.explanation}</p>
                  {issue?.requiredDocumentation && issue.requiredDocumentation.length > 0 && (
                    <div className="mb-3">
                      <p className="text-sm font-semibold text-purple-900">Documents to Demand:</p>
                      <ul className="list-disc list-inside text-sm text-purple-700">
                        {issue.requiredDocumentation.map((doc, dIdx) => (
                          <li key={dIdx}>{doc}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {issue?.suggestedAction && (
                    <p className="text-sm text-green-800 bg-green-100 p-3 rounded"><strong>Action:</strong> {issue.suggestedAction}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Account Analysis */}
        {((results?.accountAnalysis ?? []).length > 0) && (
          <div className="rounded-2xl bg-neutral-900/60 backdrop-blur-md border border-white/10 p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-8 h-8 text-rose-500" />
              <h2 className="text-2xl font-bold text-neutral-100">Account Analysis</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-neutral-800">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-200">Account</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-200">Status</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-200">Balance</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-200">DOFD</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-200">Issues</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-700">
                  {(results?.accountAnalysis ?? []).slice(0, 50).map((account, idx) => (
                    <tr key={idx} className={`hover:bg-neutral-800/50 ${account?.hasViolations ? 'bg-red-950/30' : ''}`}>
                      <td className="px-4 py-3 text-sm text-neutral-100 font-medium">{account?.accountName ?? 'N/A'}</td>
                      <td className="px-4 py-3 text-sm">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          account?.status === 'Open' || account?.status === 'Current' ? 'bg-green-100 text-green-700'
                          : account?.status === 'Closed' ? 'bg-neutral-200 text-neutral-700'
                          : account?.status === 'Derogatory' || account?.status === 'Collection' ? 'bg-red-100 text-red-700'
                          : 'bg-yellow-100 text-yellow-700'
                        }`}>{account?.status ?? 'Unknown'}</span>
                      </td>
                      <td className="px-4 py-3 text-sm font-medium text-neutral-100">{account?.balance ?? 'N/A'}</td>
                      <td className="px-4 py-3 text-sm text-neutral-300">{account?.dateOfFirstDelinquency ?? '-'}</td>
                      <td className="px-4 py-3 text-sm">
                        {account?.hasViolations ? (
                          <span className="px-2 py-1 bg-red-200 text-red-800 rounded text-xs font-bold">⚠ Violation</span>
                        ) : account?.comments ? (
                          <span className="text-amber-300">{account.comments}</span>
                        ) : '-'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Book a Call CTA */}
        {totalViolations > 0 && (
          <div className="mb-8">
            <BookCallCTA violationsCount={totalViolations} potentialDamages={potentialDamages} />
          </div>
        )}

        {/* Summary */}
        <div className="bg-gradient-to-r from-rose-600 to-pink-600 rounded-2xl shadow-lg p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Overall Assessment</h2>
          <p className="text-lg leading-relaxed">{results?.summary ?? 'Analysis complete. Review the violations above for detailed findings and recommended actions.'}</p>
        </div>
      </div>
    </div>
  );
}
