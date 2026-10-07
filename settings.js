/**
 * ==============================================================================
 * Moving Up 1: Critical Reading (ม.4) - Settings Controller
 * Application Version: v1.0.0-marine (Book Code: MU-B1)
 * ==============================================================================
 */

const SettingsController = {
  soundEnabled: localStorage.getItem('mu1_sound_enabled') !== 'false',
  theme: localStorage.getItem('mu1_theme') || 'light',
  fontSize: localStorage.getItem('mu1_fontsize') || 'normal',

  init() {
    this.applyTheme(this.theme);
    this.applyFontSize(this.fontSize);
  },

  openModal() {
    const modal = document.getElementById('settingsModal');
    if (modal) modal.classList.add('active');
  },

  closeModal() {
    const modal = document.getElementById('settingsModal');
    if (modal) modal.classList.remove('active');
  },

  toggleSound() {
    this.soundEnabled = !this.soundEnabled;
    localStorage.setItem('mu1_sound_enabled', this.soundEnabled);
    const toggle = document.getElementById('soundToggleCheckbox');
    if (toggle) toggle.checked = this.soundEnabled;
    if (typeof showToast === 'function') {
      showToast(this.soundEnabled ? 'เปิดเสียงเอฟเฟกต์แล้ว' : 'ปิดเสียงเอฟเฟกต์แล้ว', 'info');
    }
  },

  applyTheme(theme) {
    this.theme = theme;
    localStorage.setItem('mu1_theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  },

  toggleTheme() {
    const nextTheme = this.theme === 'light' ? 'dark' : 'light';
    this.applyTheme(nextTheme);
    if (typeof showToast === 'function') {
      showToast(nextTheme === 'dark' ? 'เปลี่ยนเป็นธีมมืด (Dark Mode)' : 'เปลี่ยนเป็นธีมสว่าง (Ocean Marine Theme)', 'info');
    }
  },

  applyFontSize(size) {
    this.fontSize = size;
    localStorage.setItem('mu1_fontsize', size);
    const root = document.documentElement;
    if (size === 'small') root.style.fontSize = '14.5px';
    else if (size === 'large') root.style.fontSize = '18px';
    else root.style.fontSize = '16px';
  },

  resetAllProgress() {
    if (confirm('คุณต้องการล้างข้อมูลคะแนนและความก้าวหน้าของ Moving Up 1 ทั้งหมดใช่หรือไม่? การกระทำนี้ไม่สามารถย้อนกลับได้')) {
      for (let i = 1; i <= 10; i++) {
        localStorage.removeItem(`mu1_ex_${i}_score`);
        localStorage.removeItem(`mu1_ex_${i}_completed`);
      }
      localStorage.removeItem('mu1_completed_units');
      if (typeof showToast === 'function') {
        showToast('ล้างข้อมูลคะแนน Moving Up 1 เรียบร้อยแล้ว', 'success');
      }
      setTimeout(() => {
        window.location.reload();
      }, 700);
    }
  }
};

window.SettingsController = SettingsController;
