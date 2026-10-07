# Moving Up 1: Critical Reading (ม.4) - Deployment & Operation Guide

**เว็บแอปพลิเคชันเพื่อการศึกษา สำนักพิมพ์ไทยวัฒนาพานิช (ทวพ) & WorldCom ELT**  
**รหัสเล่ม:** `MU-B1` | **เวอร์ชัน:** `v1.0.4-marine` (Complete Edition - All 10 Audio Tracks Included)

---

## 1. ข้อมูลสถาปัตยกรรมและไฟล์ในระบบ

แอปพลิเคชันนี้ใช้โครงสร้าง **Clean Modular Architecture** โดยไม่มีการรวมไฟล์แบบ Monolithic Bloat:

```text
Moving Up 1 app/
├── assets/
│   ├── audio/              # ไฟล์เสียง MP3 แท้ครบ 100% (ex1.mp3 - ex10.mp3) รวมเพียง ~6.4MB
│   └── images/
│       ├── covers/         # ภาพปก 8 เล่มสำหรับแถบวิ่งด้านล่าง (Marquee)
│       ├── cover.jpg       # ภาพปก Moving Up 1 (S__48250901.jpg)
│       ├── twp_logo.png    # โลโก้ ทวพ (3.png)
│       └── ex1.jpg-ex10.jpg# ภาพประกอบประจำบทเรียน 10 บท (16:9)
├── css/
│   └── style.css           # สไตล์ชีต Ocean Marine & Coral Reef (รองรับ Dark Mode)
├── js/
│   ├── app.js              # State Controller, Quiz Engine, Audio Engine, Marquee, Lightbox
│   ├── data.js             # ฐานข้อมูล 10 บทเรียนเต็ม (150 ข้อ) + 10 Audio Timestamps
│   ├── i18n.js             # ระบบสลับภาษา ไทย ⇄ อังกฤษ Real-time
│   ├── settings.js         # ตัวควบคุมการตั้งค่า (Scoped: mu1_*)
│   ├── system-check.js     # ระบบตรวจวิเคราะห์ความพร้อมของเบราว์เซอร์
│   └── qrcode.min.js       # ไลบรารีสร้าง QR Code
├── index.html              # มาร์กอัปหลัก (~28KB สะอาดตา รองรับเปิดแบบ Local 100%)
├── manifest.json           # Web App Manifest สำหรับติดตั้ง PWA
├── sw.js                   # Service Worker Offline แคชครบทั้ง 10 เสียง Auto Cache Purge
├── .nojekyll               # ไฟล์สำหรับข้าม Jekyll บน GitHub Pages
├── vercel.json             # ไฟล์ Configuration สำหรับ Vercel
├── _redirects              # ไฟล์ Routing สำหรับ Netlify
├── เปิดใช้งาน Moving Up 1.bat # ตัวเปิดใช้งานแบบ 1-Click บน Windows
└── DEPLOYMENT_GUIDE.md     # เอกสารแนะนำการติดตั้ง
```

---

## 2. ฟังก์ชันหลักและระบบแบบฝึกหัด (Features)

* **10 Units เต็ม (150 Items):**
  * **Part 1 (Comprehension & Analysis):** ปรนัย 5 ข้อ (A, B, C) พร้อมระบบเฉลยและคำอธิบายละเอียด
  * **Part 2 (Word Bank):** เติมคำ 5 ข้อ ผ่านระบบ Derangement Scramble (สุ่มไม่ให้ตรงเฉลย) และไม่มีคำใบ้
  * **Part 3 (Sentence Unscramble):** เรียงคำ 5 ข้อ ผ่านระบบ Token Scramble แตะย้ายและแตะดึงคำกลับได้อิสระ
* **ระบบเสียงเจ้าของภาษาแท้ครบ 100% (Native Audio Engine):**
  * มีไฟล์ MP3 บันทึกเสียงจริงครบทุกบท (`ex1.mp3` ถึง `ex10.mp3`)
  * ระบบ **Synchronized Paragraph Highlighting**: ไฮไลต์ตามเสียงพูดแบบ Real-time
  * ระบบ **Click-to-Play Single Paragraph**: คลิกย่อหน้าใดก็ได้เพื่อฟังเฉพาะย่อหน้านั้นจากเสียงจริง
  * ปุ่มปรับความเร็วเสียง `0.8x`, `1.0x`, `1.2x`
* **ระบบคิดคะแนน 4 ระดับ (4-Tier Evaluation):**
  * 80% - 100% (12-15 คะแนน): *ยอดเยี่ยมมาก รักษามาตรฐานต่อไป* + Fanfare Sound
  * ต่ำกว่า 80% (10-11 คะแนน): *ดีมาก*
  * ต่ำกว่า 70% (8-9 คะแนน): *ทำได้ดี*
  * ต่ำกว่า 50% (0-7 คะแนน): *ต้องฝึกอีกหน่อย*
* **กฎความเข้มงวด:** ทำไม่ครบ 5 ข้อในแต่ละพาร์ท หากกดส่งจะถือว่า Incomplete และได้ 0 คะแนน
* **กฎบทสุดท้าย (Unit 10):** ซ่อนปุ่ม Next Unit ทันที และแสดงกล่องเฉลิมฉลองสำเร็จหลักสูตร
* **แถบ Product Showcase Marquee ด้านล่าง:**
  * นำภาพปกหนังสือ 8 เล่มของ ทวพ มาวิ่งแนะนำแบบ Infinite Loop
  * สามารถกดปุ่ม **"ย่อแถบ"** หรือ **"ขยายแถบ"** เพื่อคืนพื้นที่หน้าจอสำหรับทำแบบฝึกหัดได้เต็มที่
  * มีระบบ Auto-Collapse อัตโนมัติเมื่อเริ่มทำแบบฝึกหัด

---

## 3. ขั้นตอนการนำขึ้น GitHub Pages / Hosting

เนื่องจากโครงสร้างใช้ Relative Path 100% และมีไฟล์ `.nojekyll` จึงสามารถ Deploy ได้สะดวกมาก:

### ตัวเลือกที่ 1: GitHub Pages
1. สร้าง Repository ใหม่บน GitHub เช่น `moving-up-1-app`
2. อัปโหลดไฟล์ทั้งหมดในโฟลเดอร์นี้ขึ้นสู่ Repository (Branch: `main`)
3. ไปที่ **Settings** > **Pages** > **Build and deployment**
4. เลือก Branch `main` และโฟลเดอร์ `/ (root)` แล้วกด **Save**
5. เว็บไซต์จะออนไลน์พร้อมใช้งานทันที เช่น `https://username.github.io/moving-up-1-app/`

### ตัวเลือกที่ 2: Vercel / Netlify
* ลากโฟลเดอร์นี้วางบน Dashboard ของ Netlify หรือเชื่อมต่อ Git กับ Vercel จะเริ่มทำงานอัตโนมัติ

---

## 4. สถานะไฟล์เสียง (Audio Completed)
* ปัจจุบันไฟล์เสียง MP3 ครบถ้วนทั้ง 10 บทเรียนแล้ว (`assets/audio/ex1.mp3` ถึง `ex10.mp3`)
* ไฟล์ต้นฉบับ Master WAV เก็บสำรองไว้อย่างปลอดภัยที่โฟลเดอร์ `raw_audio/Moving Up 1/`
