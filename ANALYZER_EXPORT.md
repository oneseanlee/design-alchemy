# Credit Report Analyzer - Export Package

This document contains all the files needed to copy the credit report analyzer functionality to another project.

---

## Table of Contents

1. [Database Migration Script](#database-migration-script)
2. [Edge Functions](#edge-functions)
3. [Frontend Components](#frontend-components)
4. [Shared Libraries](#shared-libraries)
5. [Required Secrets](#required-secrets)
6. [Dependencies](#dependencies)
7. [Configuration](#configuration)

---

## Database Migration Script

Run this SQL in your Supabase SQL editor to create the required tables:

```sql
-- ============================================
-- CREDIT ANALYZER DATABASE MIGRATION
-- ============================================

-- 1. Create leads table
CREATE TABLE public.leads (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    ip_address TEXT,
    ebook_downloaded BOOLEAN DEFAULT false,
    portal_accessed BOOLEAN DEFAULT false,
    reports_downloaded BOOLEAN DEFAULT false,
    analysis_completed BOOLEAN DEFAULT false,
    violations_found INTEGER DEFAULT 0,
    call_booked BOOLEAN DEFAULT false,
    source TEXT,
    utm_campaign TEXT,
    utm_source TEXT,
    utm_medium TEXT,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- 2. Create analysis_results table
CREATE TABLE public.analysis_results (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    lead_id UUID REFERENCES public.leads(id),
    results_json JSONB NOT NULL,
    violations_count INTEGER DEFAULT 0,
    damages_potential NUMERIC DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- 3. Enable Row Level Security
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.analysis_results ENABLE ROW LEVEL SECURITY;

-- 4. RLS Policies for leads table (service role only)
CREATE POLICY "deny_anon_access" ON public.leads
    AS RESTRICTIVE FOR ALL TO anon
    USING (false) WITH CHECK (false);

CREATE POLICY "deny_authenticated_access" ON public.leads
    AS RESTRICTIVE FOR ALL TO authenticated
    USING (false) WITH CHECK (false);

CREATE POLICY "service_role_full_access" ON public.leads
    AS RESTRICTIVE FOR ALL TO service_role
    USING (true) WITH CHECK (true);

-- 5. RLS Policies for analysis_results table (service role only)
CREATE POLICY "deny_anon_access_results" ON public.analysis_results
    AS RESTRICTIVE FOR ALL TO anon
    USING (false) WITH CHECK (false);

CREATE POLICY "deny_authenticated_access_results" ON public.analysis_results
    AS RESTRICTIVE FOR ALL TO authenticated
    USING (false) WITH CHECK (false);

CREATE POLICY "service_role_full_access_results" ON public.analysis_results
    AS RESTRICTIVE FOR ALL TO service_role
    USING (true) WITH CHECK (true);

-- 6. Create indexes for performance
CREATE INDEX idx_leads_email ON public.leads(email);
CREATE INDEX idx_leads_ip_address ON public.leads(ip_address);
CREATE INDEX idx_leads_created_at ON public.leads(created_at DESC);
CREATE INDEX idx_analysis_results_lead_id ON public.analysis_results(lead_id);
```

---

## Edge Functions

### supabase/config.toml

Add these function configurations:

```toml
[functions.analyze-report]
verify_jwt = false

[functions.generate-pdf]
verify_jwt = false

[functions.create-lead]
verify_jwt = false
```

---

## Required Secrets

Add these secrets to your Supabase project:

1. **GEMINI_API_KEY** - Google Gemini API key for AI analysis

---

## Dependencies

Add these npm packages to your project:

```bash
npm install zod @supabase/supabase-js lucide-react hls.js
```

---

## File List

### Edge Functions (copy to supabase/functions/)

1. `supabase/functions/analyze-report/index.ts` - Main analysis edge function
2. `supabase/functions/analyze-report/legal-knowledge.ts` - Legal knowledge base
3. `supabase/functions/generate-pdf/index.ts` - PDF generation
4. `supabase/functions/create-lead/index.ts` - Lead creation

### Frontend (copy to src/)

1. `src/pages/Analyze.tsx` - Main analyzer page
2. `src/components/analysis-results.tsx` - Results display component
3. `src/components/lead-capture-dialog.tsx` - Lead capture modal
4. `src/lib/analysis-schema.ts` - Zod schemas for analysis data
5. `src/lib/lead-context.tsx` - Lead context provider

### Assets (copy to src/assets/)

- `experian-logo.png`
- `equifax-logo.png`
- `transunion-logo.png`
- `annualcreditreport-logo.png`
- `consumer-logo.png`
- `carc-header-logo.png`
- `annualcreditreport-logo-color.png`

---

## Integration Steps

1. Run the database migration SQL
2. Add GEMINI_API_KEY secret to Supabase
3. Copy edge function files to `supabase/functions/`
4. Update `supabase/config.toml` with function configs
5. Copy frontend files to their respective locations
6. Copy asset images
7. Add route in App.tsx: `<Route path="/analyze" element={<Analyze />} />`
8. Wrap app with `<LeadProvider>` in main.tsx

---

## Environment Variables

Your `.env` file needs:

```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_anon_key
```

---

## Notes

- The analyze-report function uses Gemini 2.5 Pro with 300s timeout
- PDFs are uploaded to Gemini Files API and deleted after processing
- Rate limiting: 20 requests per IP per hour
- Max file size: 5MB per PDF, 10MB total payload
