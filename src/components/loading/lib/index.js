import LoadingComponent from './components/loading.vue'

let $vm
let lodingTimer 

export default {
    install(Vue, options) {
        if (!$vm) {
            const LoadingPlugin = Vue.extend(LoadingComponent);

            $vm = new LoadingPlugin({
                el: document.createElement('div')
            });

            document.body.appendChild($vm.$el);
        }

        $vm.bolen = false;

        let loading = {
            show({msg,type,time = 2000}) {
                $vm.bolen = true;
                $vm.msg = msg;
                $vm.type = type;
                let that = this
                clearTimeout(lodingTimer)
                lodingTimer = setTimeout(function () {
                    that.hide();
                },time)
            },
            hide() {
                $vm.bolen = false;
            }
        }

        if (!Vue.$loading) {
            Vue.$loading = loading;
        }

        Vue.mixin({
            created() {
                this.$loading = Vue.$loading;
            }
        });
    }
}
