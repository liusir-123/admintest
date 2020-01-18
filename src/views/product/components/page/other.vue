<template>
  <div>
    <themPlane title="物流配送">
      <el-form ref="form" label-width="100px" >
        <el-form-item label="配送方式">
          <!--  -->
          <div>
            <el-radio  v-model="wuliuRadio1"  :label="1" >实物商品(需要物流)</el-radio>
            <div v-if="wuliuRadio1 == 1">
              <el-checkbox v-model="checked">快递发货</el-checkbox>
              <el-form ref="form" label-width="100px" >
                <el-form-item label="快递运费：">
                  <el-radio  class="w_block margin_b" v-model="wuliuRadio1"  :label="1" >
                    实物商品(需要物流)
                    <el-input style="width:120px;" />
                  </el-radio>
                  <el-radio class="w_block "  v-model="wuliuRadio1"  :label="1" >
                    实物商品(需要物流)
                    <el-select v-model="value" placeholder="请选择">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-radio>
                  <p class="m_info">运费模板支持按地区设置运费，按购买件数计算运费，按重量计算运费等</p>
                </el-form-item>
              </el-form>
            </div>
          </div>
          <!--  -->
          <div>
            <el-radio  v-model="wuliuRadio1"  :label="2" >虚拟物品(无需物流)</el-radio>
            <div v-if="wuliuRadio1 == 2">
              <el-form ref="form" label-width="120px" >
                <el-form-item label="选择产品类型：">
                  <el-select v-model="value" placeholder="请选择">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="消息模板：">
                  <el-input style="width:120px;" />
                </el-form-item>
                <el-form-item label="消息发送方式：">
                  <el-radio class="w_block "  v-model="wuliuRadio1"  :label="1" >
                    站内消息
                  </el-radio>
                  <el-radio class="w_block "  v-model="wuliuRadio1"  :label="1" >
                    短信消息 <el-button type="text">设置</el-button>
                  </el-radio>
                  <el-radio class="w_block "  v-model="wuliuRadio1"  :label="1" >
                    邮件消息 <el-button type="text">设置</el-button>
                  </el-radio>
                </el-form-item>
              </el-form>
            </div>
          </div>
        </el-form-item>
      </el-form>
    </themPlane>
    <themPlane title="上架限购" >
      <el-form ref="form"  label-width="100px" >
        <el-form-item  label="上架时间">
           <div style="margin-bottom:10px;"><el-radio label="立即上架" value="1"></el-radio></div>
            <div style="margin-bottom:10px;">
                  <el-date-picker
                  v-model="value1"
                  type="date"
                  placeholder="选择日期">
                  </el-date-picker>
            </div>
            <div style="margin-bottom:10px;"><el-radio label="暂不售卖，放入仓库" value="1"></el-radio></div>
        </el-form-item>
      </el-form>
      <el-divider ></el-divider>
      <el-form ref="form"  label-width="100px" >
        <el-form-item  label="预售">
           <el-checkbox class="w_block" v-model="checked">无现货，下单后需过段时间才能发货</el-checkbox>
           <div class="item_box">
              <el-radio>全款预售</el-radio>
              <div class="item_box">
                <el-form ref="form" >
                  <el-form-item  label="发货时间：">
                    <el-radio class="w_block "  v-model="wuliuRadio1"  :label="1" >
                      <el-date-picker
                      v-model="value1"
                      type="date"
                      placeholder="选择日期">
                      </el-date-picker> 开始发货 
                    </el-radio>
                    <p>
                      付款成功
                      <el-input style="width:120px;" />
                      天后发货
                    </p>
                  </el-form-item>
                </el-form>
              </div>
           </div>
           <div class="item_box">
              <el-radio>定金预售</el-radio>
              <div class="item_box">
                <el-form ref="form" label-width="120px" >
                  <el-form-item  class="margin_t" label="定金支付时间：">
                    <el-date-picker
                    v-model="value1"
                    type="date"
                    placeholder="选择日期">
                  </el-date-picker>
                  </el-form-item>
                  <el-form-item  class="margin_t" label="尾款支付时间：">
                    <el-date-picker
                    v-model="value1"
                    type="date"
                    placeholder="选择日期">
                    </el-date-picker>
                  </el-form-item>
                  <el-form-item class="margin_t"  label="发货时间：">
                    <el-radio class="w_block "  v-model="wuliuRadio1"  :label="1" >
                      <el-date-picker
                      v-model="value1"
                      type="date"
                      placeholder="选择日期">
                      </el-date-picker> 开始发货 
                    </el-radio>
                    <p>
                      付款成功
                      <el-input style="width:120px;" />
                      天后发货
                    </p>
                  </el-form-item>
                  <el-form-item  label="定金比例：">
                    <el-select v-model="value" placeholder="请选择预售定金比例">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                    <span style="color: red">10元</span>
                  </el-form-item>
                </el-form>
              </div>
           </div>
        </el-form-item>
        <el-form-item  label="限购">
           <el-checkbox class="w_block" v-model="checked">限制每人可购买数量</el-checkbox>
           <div class="item_box">
              <el-radio class="w_block" value="1">终身限购<el-input  class="num_input"  />件</el-radio>
              <el-radio class="w_block margin_t" value="2">
                按周期限购 
                <el-select v-model="value">
                  <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                  </el-option>
                </el-select>
                <el-input  class="num_input" />件
              </el-radio>
           </div>
           <el-checkbox class="w_block" v-model="checked">只允许特定用户购买</el-checkbox>
           <div class="item_box">
            <p class="m_info">请选择拥有哪些会员卡的用户可以购买该商品：</p>    
            <el-checkbox-group v-model="checkList">
              <el-checkbox label="普通会员卡"></el-checkbox>
              <el-checkbox label="月会员卡"></el-checkbox>
              <el-checkbox label="年会员卡"></el-checkbox>
              <el-checkbox label="终身会员卡" ></el-checkbox>
            </el-checkbox-group>  
            <p class="m_info">选择会员身份来设置：</p>    
            <el-checkbox-group v-model="checkList">
              <el-checkbox label="初级会员"></el-checkbox>
              <el-checkbox label="普通会员"></el-checkbox>
              <el-checkbox label="高级会员"></el-checkbox>
              <el-checkbox label="钻石会员"></el-checkbox>
            </el-checkbox-group>          
           </div>
        </el-form-item>
      </el-form>
    </themPlane>
    <themPlane title="关联商品" >
      <div class="">
        <el-select v-model="value" placeholder="请选择商品分类">
          <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
          </el-option>
        </el-select>
        <el-select v-model="value" placeholder="请选择品牌">
          <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
          </el-option>
        </el-select>
        <el-input style="width: 200px;" placeholder="请输入搜索关键词" />
        <el-button type="primary"  plain>搜索</el-button>
      </div>
      <div  class="transBox-len margin_t margin_b">
        <div class="transBox">
          <div class="tabInfoTitle">
              已选择4条
          </div>
          <div class="paddingAll">
            <el-checkbox class="w_block" label="全选" ></el-checkbox>
            <el-checkbox class="w_block" label="全选" ></el-checkbox>
            <el-checkbox class="w_block" label="全选" ></el-checkbox>
            <el-checkbox class="w_block" label="全选" ></el-checkbox>
            <el-checkbox class="w_block" label="全选" ></el-checkbox>
            <el-checkbox class="w_block" label="全选" ></el-checkbox>
            <el-checkbox class="w_block" label="全选" ></el-checkbox>
            <el-checkbox class="w_block" label="全选" ></el-checkbox>
            <el-checkbox class="w_block" label="全选" ></el-checkbox>
            <el-checkbox class="w_block" label="全选" ></el-checkbox>
          </div>
          <div class="tabInfoTitle flex_rowBetwen">
              <el-checkbox class="w_block" label="全选" ></el-checkbox>
              <el-button type="primary">确定</el-button>
          </div>
        </div>
        <div class="transBox">
          <div class="flex_center paddingAll">
            <el-radio-group >
              <el-radio class="w_block margin_t" :label="3">单项关联</el-radio>
              <el-radio class="w_block margin_t" :label="6">双向关联</el-radio>
            </el-radio-group>
          </div>
        </div>
        <div class="transBox">
          <div class="tabInfoTitle">
              已选择4条
          </div>
          <div class="paddingAll">
            <el-checkbox class="w_block" label="全选" ></el-checkbox>
            <el-checkbox class="w_block" label="全选" ></el-checkbox>
            <el-checkbox class="w_block" label="全选" ></el-checkbox>
            <el-checkbox class="w_block" label="全选" ></el-checkbox>
            <el-checkbox class="w_block" label="全选" ></el-checkbox>
            <el-checkbox class="w_block" label="全选" ></el-checkbox>
            <el-checkbox class="w_block" label="全选" ></el-checkbox>
            <el-checkbox class="w_block" label="全选" ></el-checkbox>
            <el-checkbox class="w_block" label="全选" ></el-checkbox>
            <el-checkbox class="w_block" label="全选" ></el-checkbox>
          </div>
          <div class="tabInfoTitle flex_rowBetwen">
              <el-checkbox class="w_block" label="全选" ></el-checkbox>
              <el-button type="primary">确定</el-button>
          </div>
        </div>
      </div>
    </themPlane>
  </div>
</template>
<script>
  import themPlane from "../themPlane"
  export default{
    name:"other",
    components:{
      themPlane,
    },
    data() {
      return {
         wuliuRadio1:1,//物流
         checkList:[],
         options:[],
         list2: [
          { name: "text1" },
          { name: "text2" }
        ]
      }
    },
    methods: {

    }
  };
</script>
<style lang="scss" scoped> 
.num_input{
  width: 80px;
  margin:0px 10px;
}
  .m_info {
    line-height: 20px;
    margin:0px;
  }
  .tooltip {
    margin-left: 10px;
  }
  .item_box{
    padding-left: 30px;
  }
  .transBox{
    display:inline-block;
    width: 250px;
    vertical-align: top;
  }
  .paddingAll{
    height: 200px;
    overflow-y: scroll;
  }
</style>