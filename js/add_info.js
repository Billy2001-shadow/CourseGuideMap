var app = new Vue({
        el: '#table',
        data: {
            addDetail: {},
            editlist: false,
            editDetail: {},
            newsList: [{
                title: '数据结构',
                type: '专业必修课',
                dates: '大二秋',
                precursor: "2",
                required:"是",
                grade:"2",
            }, {
                title: '数据结构',
                type: '专业必修课',
                dates: '大二秋',
                precursor: "2",
                required:"是",
                grade:"2",
            }, {
                title: '数据结构',
                type: '专业必修课',
                dates: '大二秋',
                precursor: "2",
                required:"是",
                grade:"2",
            }, {
                title: '数据结构',
                type: '专业必修课',
                dates: '大二秋',
                precursor: "2",
                required:"是",
                grade:"2",
            }, {
                title: '数据结构',
                type: '专业必修课',
                dates: '大二秋',
                precursor: "2",
                required:"是",
                grade:"2",
            }],
            editid:''
        },
        mounted() {

        },
        methods: {

            //新增
            adddetail() {
                //这里的思路应该是把this.addDetail传给服务端，然后加载列表this.newsList
                //this.newsList.push(this.addDetail)
                this.newsList.push({
                    title: this.addDetail.title,
                    type: this.addDetail.type,
                    dates: this.addDetail.dates,
                    precursor: this.addDetail.precursor,
                    required: this.addDetail.required,
                    grade: this.addDetail.grade,
                    id:Math.floor(Math.random()*1000000+1)
                })

                //axios.post('url',this.addDetail).then((res) =>{
                //若返回正确结果，清空新增输入框的数据
                //this.addDetail.title = ""
                //this.addDetail.user = ""
                //this.addDetail.dates = ""
                //})

            },
            //删除
            deletelist(id, i) {
                this.newsList.splice(i, 1);
                //这边可以传id给服务端进行删除  ID = id
                //axios.get('url',{ID:id}).then((res) =>{
                //			加载列表				
                //})
            },
            //编辑
            edit(item) {
                console.log(item)
                this.editDetail = {
                    title: item.title,
                    type: item.type,
                    dates: item.dates,
                    precursor: item.precursor,
                    required: item.required,
                    grade: item.grade,
                    id: item.id
                }
                this.editlist = true
                this.editid = item.id
                
            },
            //确认更新
            update() {
                //编辑的话，也是传id去服务端
                //axios.get('url',{ID:id}).then((res) =>{
                //			加载列表				
                //})
                let _this= this
                for(let i = 0; i < _this.newsList.length; i++) {
                    if(_this.newsList[i].id ==this.editid) {
                        _this.newsList[i] = {
                            title: _this.editDetail.title,
                            type: _this.editDetail.type,
                            dates: _this.editDetail.dates,
                            precursor: _this.editDetail.precursor,
                            required: _this.editDetail.required,
                            grade: _this.editDetail.grade,
                            id: this.editid
                        }
                        this.editlist = false
                    }
                }
            }
        }
    })