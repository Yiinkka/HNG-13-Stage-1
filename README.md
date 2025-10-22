# Multi-Page Profile & Contact Application

This project is an enhancement of a single-page profile card into a **multi-page application**. It demonstrates the use of **semantic HTML, accessibility best practices, responsive design, form validation, and data-testid attributes**.  

---

## 🌐 Live Demo
You can view the live application here:  
🔗 `[Insert your GitHub Pages link here]`

---

## 📂 Project Structure
The project consists of:

- **Home/Profile Card Page**  
  - Original profile card with personal details.

- **Contact Us Page** (`contact.html`)  
  - A form for visitors to send messages.  
  - Features **form validation**, **success/error messages**, and full **keyboard accessibility**.

- **About Me Page** (`about.html`)  
  - A reflective page sharing personal thoughts and goals.  
  - Structured using **semantic HTML** with sections and headings.

---

## 📝 Features

### Contact Us Page
- **Form Fields (with `data-testid`)**:
  - Full Name — `test-contact-name`
  - Email — `test-contact-email`
  - Subject — `test-contact-subject`
  - Message — `test-contact-message`
  - Submit Button — `test-contact-submit`
  - Error Messages — `test-contact-error-<field>` (e.g., `test-contact-error-email`)
  - Success Message — `test-contact-success`

- **Validation Rules**:
  - All fields are required.
  - Email must follow a valid format (`name@example.com`).
  - Message must be at least 10 characters.

- **Accessibility**:
  - All inputs have properly associated `<label>` elements.
  - Error messages linked using `aria-describedby`.
  - Fully keyboard navigable.

---

### About Me Page
- **Sections (with `data-testid`)**:
  - Bio — `test-about-bio`
  - Goals in this program — `test-about-goals`
  - Areas of low confidence — `test-about-confidence`
  - Note to future self — `test-about-future-note`
  - Extra thoughts — `test-about-extra`

- **Semantic Structure**:
  - Wrapped in `<main data-testid="test-about-page">`
  - Each area uses a `<section>` with headings (`<h2>`, `<h3>`).

---

## ⚡ Accessibility & Responsiveness
- Semantic HTML throughout the application.
- All images include **alt text**.
- Forms and navigation fully **keyboard accessible**.
- Responsive layout across **mobile, tablet, and desktop** without breaking design.

---

## 🚀 Usage
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/your-repo.git
