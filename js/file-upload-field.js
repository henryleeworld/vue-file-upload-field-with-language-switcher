const messages = {
    en: {
        input: {
            button: 'Upload',
            message: 'Upload File'
        }
    },
    tw: {
        input: {
            button: '上傳',
            message: '上傳檔案'
        }
    },
    cn: {
        input: {
            button: '上传',
            message: '上传档案'
        }
    },
    jp: {
        input: {
            button: 'アップロード',
            message: 'ファイルをアップロードする'
        }
    }
};
const i18n = new VueI18n({
    locale: 'tw',
    messages
});

var vm = new Vue({
    el: "#app",
    i18n,
    data: {
        statement: "切換語言",
        lan: '',
    },
    methods: {
        previewFiles(event) 
		{
            event.target.parentNode.lastChild.innerHTML = event.target.files[0].name;
        }
    },
    mounted() {
        // document.querySelector(".btn-traditional-chinese").click();
    }
});