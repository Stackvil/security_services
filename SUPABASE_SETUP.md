# Supabase Handover Setup Guide

To enable global content management for your website, follow these steps to connect your Supabase database.

## 1. Create a Supabase Table
1. Go to your [Supabase Dashboard](https://supabase.com/dashboard).
2. Create a new 프로젝트.
3. Open the **SQL Editor** in the left sidebar.
4. Paste and run the following SQL to create the necessary table:

```sql
create table site_content (
  key text primary key,
  content jsonb not null,
  updated_at timestamp with time zone default now()
);

-- Enable Row Level Security (RLS) if you want to restrict access, 
-- or for now, disable it to allow the Admin panel to sync.
alter table site_content enable row level security;

-- Simple policy to allow all for now (You can restrict this to your IP later)
create policy "Allow all access to site_content"
on site_content for all
using (true)
with check (true);
```

## 2. Configure Environment Variables
You need to add your credentials to Vercel (and your local `.env` file).

1. In Supabase, go to **Project Settings > API**.
2. Copy the **Project URL** and the **Anon Key**.
3. In your project (or Vercel Dashboard), add these environment variables:
   - `VITE_SUPABASE_URL` = (Your Project URL)
   - `VITE_SUPABASE_ANON_KEY` = (Your Anon Key)

## 3. How to Sync Data
Once you deploy with these keys:
1. Log in to your Admin Dashboard (`/admin`).
2. Make any change (e.g., Update a service name).
3. The dashboard will automatically sync that data to Supabase.
4. **Instantly**, all other users visiting the site will see that update!

---
**Handover Status**: Code is ready. Once you add these keys, the site is fully dynamic and ready for your client!
