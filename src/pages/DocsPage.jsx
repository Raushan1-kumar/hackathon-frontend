import { motion } from "framer-motion";
import Header from "./Header";

export default function DocsPage() {
  return (
    <>
    <Header/>
    <div className="min-h-screen mt-14 bg-gradient-to-br from-green-100 to-white text-gray-900 dark:from-gray-900 dark:to-gray-800 dark:text-white p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto space-y-10"
        >
        <h1 className="text-4xl font-bold text-center">📘 Help & Documentation</h1>

        {/* Login & Signup */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">🔐 Login & Signup</h2>
          <p>
            To access your personalized dashboard, start by creating an account using your email and password. Already have one? Just head to the login page.
          </p>
          <ul className="list-disc list-inside mt-2 text-sm text-gray-700 dark:text-gray-300">
            <li>Passwords are encrypted and secure.</li>
            <li>Login sessions are saved using secure cookies.</li>
          </ul>
        </section>

        {/* Emergency Details */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">🚨 Emergency Details</h2>
          <p>
            Once you submit your emergency details (blood group, allergies, contacts, etc.), a unique ID (UUID) is generated and stored. This allows others to access your emergency info without login if needed.
          </p>
          <p className="mt-2 text-sm text-green-700 dark:text-green-300">
            🔑 Tip: Save the generated emergency access link or bookmark the page right after adding your info.
          </p>
        </section>

        {/* Medical Records */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">📄 Medical Records</h2>
          <p>
            You can manage your personal health history, conditions, medications, allergies, surgeries, and doctors easily. All entries are stored securely and can be updated any time.
          </p>
          <ul className="list-disc list-inside mt-2 text-sm text-gray-700 dark:text-gray-300">
            <li>Add or remove records anytime.</li>
            <li>Data is visible only to you unless shared explicitly.</li>
          </ul>
        </section>

        {/* Profile & Settings */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">👤 Profile & Settings</h2>
          <p>
            Update your name, contact, or password from the Profile section. Manage theme, language, or notifications from the Settings tab.
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
            Note: Changes are synced automatically. You don’t need to save manually.
          </p>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">❓ Frequently Asked Questions</h2>
          <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1">
            <li><strong>How do I access emergency details later?</strong> Use the UUID link or your saved link. No login required.</li>
            <li><strong>Is my data private?</strong> Yes. All information is encrypted and stored securely.</li>
            <li><strong>Can I update emergency/medical info later?</strong> Absolutely, just log in and head to the relevant section.</li>
            <li><strong>I lost my UUID. What now?</strong> Re-add your emergency details or contact support to retrieve your UUID securely.</li>
          </ul>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">📬 Need More Help?</h2>
          <p>
            Reach out to us at <a href="mailto:support@mediwallet.com" className="text-green-600 dark:text-green-400 underline">support@mediwallet.com</a> or use the feedback form available in your dashboard.
          </p>
        </section>
      </motion.div>
    </div>
          </>
  );
}