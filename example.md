---
theme: ./
favicon: './assets/favicon.ico'
layout: cover
themeConfig:
  logo: './assets/logo.png'
  author: 'Steven Hill'
  avatar: './assets/avatar.png'
  coverBackground: './assets/cover.png'
  backgroundImage: './assets/page.png'
  showProgressBar: true
---

# Slidev Theme Starter
Steven Hill


---
title: Introduction
layout: default
---

# What is Slidev?

Slidev is a slide maker and presentation tool designed for developers. It includes the following features:

- 📝 **Text-based** - focus on your content with Markdown, then style it later


---
layout: default
---

# Admonitions

<AdmonitionType type='tip' >
This is important text
</AdmonitionType>

<AdmonitionType type='warning' >
This is a warning
</AdmonitionType>


<AdmonitionType type='caution' >
This is warning text
</AdmonitionType>

<Admonition title="Custom title" color='amber-light'>
This is my admon message
</Admonition>

---
layout: default
---

# Quote

<QuoteBlock
  text="The only way to do great work is to love what you do."
  author="Steve Jobs"
  color="#2c3e50"
  textColor="#ecf0f1"
/>

---
layout: default
---

<Timeline
    :events="[
      { title: 'Project Kickoff', date: '2025-01-01', description: 'The project officially started.' },
      { title: 'First Milestone', date: '2025-03-01', description: 'Completed the first milestone.' },
      { title: 'Launch', date: '2025-06-01', description: 'The project was successfully launched.' },
      { title: 'Post-Launch Review', date: '2025-07-01', description: 'Reviewed the project outcomes and feedback.' },
      { title: 'Future Planning', date: '2025-08-01', description: 'Started planning for the next phase.' }
    ]"
    lineColor="#33c3ff"
    dotColor="#33c3ff"
/>

---
layout: default
---

# Interactive Poll

  <InteractivePoll
    question="What is your favorite programming language?"
    :options="[
      { text: 'JavaScript' },
      { text: 'Python' },
      { text: 'Java' },
      { text: 'C++' }
    ]"
  />

---
layout: default
---

# Customizable Table

<CustomTable
  :headers="['Name', 'Age', 'Country']"
  :rows="[
    ['Alice', 25, 'USA'],
    ['Bob', 30, 'UK'],
    ['Charlie', 35, 'Canada']
  ]"
  striped
  bordered
  headerBgColor="#007acc"
  headerTextColor="#ffffff"
  rowHoverColor="#e0f7fa"
  fontSize="1.2rem"
  textAlign="center"
  :rowColors="{ odd: '#f9f9f9', even: '#f9f9f9' }"
  :cellAlignment="['left', 'center', 'right']"
  :columnWidths="['30%', '20%', '50%']"
  borderColor="#333"
  fontFamily="'Courier New', monospace"
/>