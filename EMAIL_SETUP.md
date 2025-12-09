# Email Configuration Guide

## Quick Setup

Your contact form now sends emails via Mailgun API. Here's what you need to do:

### 1. Environment Variables

Update your `.env` file with your Mailgun credentials:

```env
VITE_MAILGUN_API_KEY=your_api_key
VITE_MAILGUN_DOMAIN=your_domain
```

✅ **Already configured** with your sandbox domain.

### 2. Important Notes

**Sandbox Domain Limitations:**
- Currently using: `sandbox837f536e0d5b436295b5d399053456df.mailgun.org`
- Can only send to **authorized recipients**
- Must add recipient emails in Mailgun dashboard
- Limited to 5 authorized recipients

**To add authorized recipients:**
1. Go to https://app.mailgun.com/
2. Navigate to **Sending** → **Authorized Recipients**
3. Add `info@lashaconsultancy.com` (or other emails you want to test)
4. Recipients will receive a confirmation email
5. They must click the confirmation link

### 3. Production Setup

For production (unlimited sending to any email):

1. **Add your own domain in Mailgun:**
   - Go to **Sending** → **Domains** → **Add New Domain**
   - Follow DNS setup instructions
   - Verify domain

2. **Update `.env`:**
   ```env
   VITE_MAILGUN_DOMAIN=mg.yourdomain.com
   ```

### 4. Testing

1. Start the dev server:
   ```bash
   npm run dev
   ```

2. Fill out the contact form at http://localhost:5173

3. Check the recipient's inbox (must be authorized if using sandbox)

### 5. Security Note

⚠️ **API Key Exposure Warning:**

The current implementation uses the Mailgun API key in the frontend code. While convenient for development, this exposes your API key in the browser.

**Recommended for production:**
- Use a backend server to handle email sending
- Keep API keys server-side only
- The `server/index.js` file is already created for this purpose

To use the backend approach:
```bash
# Terminal 1 - Frontend
npm run dev

# Terminal 2 - Backend
npm run server
```

Then update `ContactSection.jsx` to send requests to your backend API instead of directly to Mailgun.

---

**Current Status:** ✅ Working with sandbox domain (limited recipients)  
**Recipient Email:** info@lashaconsultancy.com  
**Next Step:** Authorize recipient in Mailgun dashboard
