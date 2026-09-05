# 💌 Future Letter

> **Write today. Open someday.**  
> A digital time capsule for your future self.

> **写在今天，打开于未来。**  
> 一个写给未来自己的数字时间胶囊。

🌐 **Live Demo / 在线体验:**  
https://qyy-letter.vercel.app

---

## 🌍 Language / 语言

[English](#-english) | [中文](#-中文)

---

# 🇬🇧 English

## ✨ About the Project

**Future Letter** is an interactive digital time capsule that allows users to write a letter to their future selves, choose a future date, and seal the message until that day arrives.

The project originally started as a simple interactive letter webpage. As I continued learning web development, I gradually expanded it with animations, persistent browser storage, countdown functionality, and date-based unlocking.

The goal of this project is to combine a meaningful idea with the fundamental technologies of front-end web development.

---

## 🚀 Features

- 💌 Interactive envelope opening animation
- ⌨️ Typewriter text animation
- ✍️ Write a letter to your future self
- 📅 Choose a future unlock date
- 🔒 Seal the letter until the selected date
- ⏳ Real-time countdown to the unlock date
- 🔓 Automatically unlock the letter when the date arrives
- 💾 Save letter data using browser LocalStorage
- ♡ Floating background animations
- 📱 Responsive design for desktop and mobile
- 🌐 Live deployment with Vercel

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Page structure |
| CSS3 | Styling, responsive layout and animations |
| JavaScript | Interactions, countdown and application logic |
| LocalStorage | Persistent browser-side data storage |
| Git & GitHub | Version control and source code hosting |
| Vercel | Deployment and live hosting |

This project was built using **vanilla HTML, CSS and JavaScript** without a front-end framework.

---

## 💡 How It Works

1. Open the digital envelope.
2. Read the introductory letter.
3. Write a message to your future self.
4. Choose a future date.
5. Seal the letter.
6. The letter is stored locally in the browser.
7. A live countdown begins.
8. The letter remains locked until the selected date.
9. When the date arrives, the letter becomes available to open.

---

## 🔒 Time Capsule System

After a letter is sealed, its content is hidden and the application displays a countdown:

```text
🔒 TIME CAPSULE

Your letter is sealed.

Open on: September 8, 2026

Opens in
1d 21h 23m 30s

Some words are worth waiting for.
```

Once the countdown reaches zero, the application changes to the unlocked state and allows the user to open the saved letter.

---

## 💾 Data Storage

Future Letter currently uses the browser's **LocalStorage** API.

This means:

- No account is required.
- Data remains available after refreshing or reopening the website.
- Each browser stores its own letter independently.
- Letter data is not currently synchronized between devices.
- Clearing browser storage will remove the saved letter.

LocalStorage is suitable for the current front-end version of the project, but it is not intended to provide secure server-side storage.

---

## 📸 Preview

### Home & Interactive Letter

> Screenshot coming soon.

### Write to Your Future Self

> Screenshot coming soon.

### Sealed Time Capsule

> Screenshot coming soon.

---

## 🔮 Future Improvements

Future versions of the project could include:

- 👤 User accounts and authentication
- ☁️ Cloud database storage
- 📱 Cross-device synchronization
- 💌 Multiple letters per user
- 🔔 Email notifications when a letter unlocks
- 🎨 Custom letter themes
- 🔐 Secure server-side storage
- 🌙 Light and dark themes
- 🌍 Additional language support

A future version may also introduce a backend using **Django** and a database to support user accounts and cross-device access.

---

## 📚 What I Learned

Through developing Future Letter, I practiced:

- Structuring a web application with HTML
- Creating responsive layouts with CSS
- Building CSS transitions and animations
- Manipulating the DOM with JavaScript
- Handling dates and countdown timers
- Managing different application states
- Persisting browser data with LocalStorage
- Designing interactions for desktop and mobile
- Using Git and GitHub for version control
- Deploying and updating a live website with Vercel

This project also helped me understand how a small idea can gradually develop into a more complete web application through continuous iteration.

---

# 🇨🇳 中文

## ✨ 项目介绍

**Future Letter** 是一个互动式数字时间胶囊网页应用。

用户可以给未来的自己写一封信，选择一个未来的日期，并将这封信“封存”。在设定日期到来之前，信件内容会保持锁定状态，同时网页会显示实时倒计时。当指定日期到达后，信件将自动解锁，用户便可以重新打开曾经写下的内容。

这个项目最开始只是一个简单的互动信封网页。随着我不断学习 Web 开发，我逐渐为它加入了动画效果、本地数据保存、实时倒计时以及根据日期自动解锁等功能。

这个项目的目标是将一个有意义的小创意与前端 Web 开发的基础技术结合起来。

---

## 🚀 主要功能

- 💌 互动式信封打开动画
- ⌨️ 打字机文字动画
- ✍️ 给未来的自己写信
- 📅 自定义未来开启日期
- 🔒 在指定日期之前封存信件
- ⏳ 实时显示解锁倒计时
- 🔓 到达指定日期后自动解锁
- 💾 使用浏览器 LocalStorage 保存数据
- ♡ 背景漂浮动画
- 📱 支持电脑和手机的响应式布局
- 🌐 通过 Vercel 在线部署

---

## 🛠️ 技术栈

| 技术 | 用途 |
|---|---|
| HTML5 | 网页结构 |
| CSS3 | 页面样式、响应式布局和动画 |
| JavaScript | 页面交互、倒计时和应用逻辑 |
| LocalStorage | 浏览器本地数据保存 |
| Git & GitHub | 版本控制和代码托管 |
| Vercel | 网站部署和在线托管 |

项目目前使用原生 **HTML、CSS 和 JavaScript** 开发，没有使用前端框架。

---

## 💡 工作流程

1. 打开数字信封。
2. 阅读项目中的初始信件。
3. 给未来的自己写一封信。
4. 选择未来的开启日期。
5. 封存信件。
6. 信件数据保存在当前浏览器中。
7. 网页开始实时倒计时。
8. 在指定日期之前，信件保持锁定。
9. 日期到达后，信件自动进入可开启状态。

---

## 🔒 时间胶囊功能

当用户封存信件后，正文不会继续显示，而是进入锁定状态。

网页会显示：

```text
🔒 TIME CAPSULE

Your letter is sealed.

Open on: September 8, 2026

Opens in
1d 21h 23m 30s

Some words are worth waiting for.
```

当倒计时结束后，应用会自动切换到解锁状态，用户就可以重新打开之前写下的信件。

---

## 💾 数据保存

目前 Future Letter 使用浏览器提供的 **LocalStorage** 保存信件。

因此：

- 不需要注册账号。
- 刷新或重新打开网页后，信件仍然可以保留。
- 不同浏览器会分别保存自己的数据。
- 当前版本还不能在不同设备之间同步信件。
- 如果用户清除浏览器数据，保存的信件也会被删除。

LocalStorage 很适合目前的纯前端版本，但它并不是真正安全的服务器端数据存储方案。

---

## 📸 项目预览

### 首页与互动信封

> 截图即将添加。

### 写给未来的自己

> 截图即将添加。

### 时间胶囊倒计时

> 截图即将添加。

---

## 🔮 未来计划

后续可以继续加入：

- 👤 用户注册和登录系统
- ☁️ 云端数据库
- 📱 跨设备同步
- 💌 一个用户保存多封信
- 🔔 信件解锁时发送邮件通知
- 🎨 自定义信纸和主题
- 🔐 更安全的服务器端数据存储
- 🌙 深色 / 浅色主题
- 🌍 更多语言支持

未来也可以使用 **Django + Database** 开发后端，从目前的纯前端项目进一步升级成具有用户系统和云端数据存储的完整 Web Application。

---

## 📚 项目收获

通过开发 Future Letter，我练习和学习了：

- 使用 HTML 搭建网页结构
- 使用 CSS 创建响应式页面
- CSS Transition 和 Animation
- 使用 JavaScript 操作 DOM
- JavaScript 日期处理和倒计时
- 管理不同的应用状态
- 使用 LocalStorage 保存用户数据
- 设计桌面端和移动端交互
- 使用 Git 和 GitHub 进行版本控制
- 使用 Vercel 部署和持续更新网站

这个项目也让我体验了如何从一个非常简单的网页创意开始，通过不断增加功能和优化设计，逐渐把它发展成一个更完整的 Web Application。

---

## 🌐 Live Demo / 在线体验

**Future Letter**

https://qyy-letter.vercel.app

---

## 👤 Author / 作者

**Yangyu Que**

Computer Science Student  
The University of Western Australia
