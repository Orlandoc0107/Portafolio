'use client'
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import styles from "@/app/ui/home.module.css";

function ContactForm() {
  const [state, handleSubmit] = useForm("xnqengnq");

  if (state.succeeded) {
    return (
      <main className={styles.main}>
        <p>¡Email Enviado!</p>
      </main>
    );
  }

  return (
    <main className={styles.main}>
      <div className={styles.form}>
        <form onSubmit={handleSubmit} className="space-y-4">
          <label htmlFor="email" className={styles.label}>
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className={styles.input}
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />

          <label htmlFor="message" className={styles.label}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className={styles.textarea}
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />

          <button
            type="submit"
            disabled={state.submitting}
            className={styles.submit}
          >
            {state.submitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </main>
  );
}

function App() {
  return (
    <ContactForm />
  );
}

export default App;
