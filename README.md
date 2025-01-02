---

# 📅 Calendar Application for Communication Tracking  📅

A sleek, efficient application to manage communication schedules and tasks for companies. This application provides a streamlined way to organize communication methods, maintain records, and track overdue or upcoming communications effortlessly.  

---

## 🛠️ Features 🛠️ 

### 👨‍💼 Admin Module  👨‍💼
- **Company Management**:  
  - 🏢 Name  
  - 📍 Location  
  - 🌐 LinkedIn Profile  
  - ✉️ Emails  
  - 📞 Phone Numbers  
  - 📝 Comments  
  - 🔄 Communication Periodicity  

- **Communication Method Management**:  
  - 📝 Name  
  - 🖋️ Description  
  - 🔢 Sequence  
  - ✅ Mandatory Flag  

Default Communication Methods:  
1️⃣ LinkedIn Post  
2️⃣ LinkedIn Message  
3️⃣ Email  
4️⃣ Phone Call  
5️⃣ Other  

### 👤 User Module  👤
#### 📊 Dashboard  
- **Rows**: Represent companies  
- **Columns**:  
  - 🏢 Company Name  
  - 📜 Last Five Communications  
  - ⏭️ Next Scheduled Communication  

🎨 **Color-Coded Highlights**:  
- 🔴 Red: Overdue communication  
- 🟡 Yellow: Communication due today  

#### ✏️ Communication Action  
- Select a specific company or multi-select companies.  
- Click "📨 Communication Performed" to log new communication:  
  - 📝 Type of Communication  
  - 📅 Date of Communication  
  - 🗒️ Notes  

#### 🔔 Notifications  
- 📌 Overdue Communications Grid  
- 📌 Today’s Communications Grid  
- 🛑 Notification Badge  

#### 📅 Calendar View  
- View 📜 Past Communications  
- Manage ⏳ Upcoming Communications  

---

## 📂 Project Structure  

```
calendar-app/  
├── dist/  
├── node_modules/  
├── public/  
├── src/  
│   ├── assets/  
│   ├── components/  
│   │   ├── Admin/  
│   │   │   ├── CompanyForm.jsx  
│   │   │   ├── CompanyList.jsx  
│   │   │   ├── CompanyManagement.jsx  
│   │   │   ├── MethodForm.jsx  
│   │   │   ├── MethodList.jsx  
│   │   │   ├── MethodManagement.jsx  
│   │   ├── User/  
│   │       ├── CalendarScheduleView.jsx  
│   │       ├── CalendarView.jsx  
│   │       ├── CommunicationModal.jsx  
│   │       ├── Dashboard.jsx  
│   │       ├── Notifications.jsx  
│   │       ├── Sidebar.jsx  
│   │       ├── TopBar.jsx  
│   │   ├── Footer.jsx  
│   ├── services/  
│   │   ├── apiService.js  
│   ├── styles/  
│   │   ├── admin.css  
│   │   ├── user.css  
│   ├── App.css  
│   ├── App.jsx  
│   ├── index.css  
│   ├── main.jsx  
├── index.html  
├── package-lock.json  
├── package.json  
├── README.md  
├── vite.config.js  
```  

---

## 🚀 Getting Started  

### Prerequisites  
Ensure you have the following installed:  
- 🖥️ Node.js  
- 📦 npm  

### Installation  

1. Clone the repository:  
   ```bash  
   git clone (https://github.com/your-username/calendar-app.git)  
   ```  
2. Navigate to the project directory:  
   ```bash  
   cd calendar-app  
   ```  
3. Install dependencies:  
   ```bash  
   npm install  
   ```  

### Run the Application  
To start the development server:  
```bash  
npm run dev  
```  

---

## 🛠️ Technologies Used  
- **Frontend**: React.js ⚛️  
- **Styling**: CSS 🎨  
- **Backend**: Node.js 🌐  
- **API**: REST APIs 🔌  

---

## 🛡️ License  
This project is licensed under the MIT License. 📜  

---
