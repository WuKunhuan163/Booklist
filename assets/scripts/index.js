class Language {
    constructor(value, displayName, iconPath) {
        this.value = value;
        this.displayName = displayName;
        this.iconPath = iconPath;
    }

    getIconPath() {
        return this.iconPath;
    }

    getDisplayName() {
        return this.displayName;
    }

    getValue() {
        return this.value;
    }
}

class LanguageManager {
    constructor() {
        this.languages = {
            en: new Language('en', 'English', 'assets/images/booklist_icon/booklist_icon_en.png'),
            zh_cn: new Language('zh_cn', '简体中文', 'assets/images/booklist_icon/booklist_icon_ch.png'),
            zh_tr: new Language('zh_tr', '繁體中文', 'assets/images/booklist_icon/booklist_icon_ch_tr.png')
        };
        this.currentLanguage = 'en';
    }

    setLanguage(languageCode) {
        if (this.languages[languageCode]) {
            this.currentLanguage = languageCode;
            this.updateUI();
        }
    }

    getCurrentLanguage() {
        return this.languages[this.currentLanguage];
    }

    updateUI() {
        const language = this.getCurrentLanguage();
        document.title = language.getDisplayName() === 'English' ? 'Booklist' : language.getDisplayName() === '简体中文' ? '我的书单' : '我的書單';
        document.getElementById('logoImage').src = language.getIconPath();
    }
} 