import VModal from 'vue-js-modal'

Vue.use(VModal)

// Components
Vue.component('task-list', {
    template: '' +
    '<div><task v-for="task in tasks">{{task.description}}</task></div>',
    data() {
        return {
            tasks: [
                {description: 'go step one', complete: true},
                {description: 'go step 2', complete: false},
                {description: 'go step 3', complete: false},
                {description: 'go step 4', complete: true}
            ]
        }
    }
});

Vue.component('task', {
    template: '<li><slot></slot></li>'
});

// Vue.component('modal', {
//     props: ['title', 'body'],
//     data() {
//         return {
//             isVisible: true
//         }
//     },
//     template: `
//     <div class="modal" tabindex="-1" role="dialog" style="display: block">
//         <div class="modal-dialog" role="document">
//             <div class="modal-content">
//                 <div class="modal-header">
//                     <h5 class="modal-title">{{title}}</h5>
//                     <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="$emit('close')">
//                         <span aria-hidden="true">&times;</span>
//                     </button>
//                 </div>
//                 <div class="modal-body">
//                     <p>{{body}}</p>
//                 </div>
//             </div>
//         </div>
//     </div>
//     `
// });

Vue.component('tabs', {
    template: `
<div>
        <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" v-for="tab in tabs">
         <a class="nav-link" data-toggle="tab" :class="{'active': tab.isActive}" @click="selecttab(tab)" :href="tab.href">{{tab.name}}</a>
        </li>
    </ul>
    <div class="tab-detail">
    <slot></slot>
</div>
</div>
    `,
    data(){
        return{
            tabs:[]
        }
    },
    created() {
        this.tabs = this.$children;
    },
    methods:{
        selecttab(selectedtab){
            this.tabs.forEach(tab =>{
                tab.isActive = (tab.name == selectedtab.name);
            })
        }
    }
});

Vue.component('tab',{
     template:`
     <div v-show="isActive"><slot></slot></div>
     `,
     props:{
         name:{ requierd: true},
         selected: {default: false}
     },
     data(){
         return{
             isActive:false
         }
     },
     computed:{
       href(){
           return '#' + this.name.toLowerCase().replace(/ /g,'-')
         }
     },
     mounted(){
         this.isActive = this.selected
     }
 })

window.event = new Vue();


var vm= new Vue({
     el:"#root",
     methods: {
        show () {
            this.$modal.show('support');
        },
        hide () {
            this.$modal.hide('support');
        }
     }
});