<template>
  <div class="content-transparent paddingAll">
    <el-row>
      <el-col :span="17">
        <div class="wplane paddingAll padding_t">
          <el-input type="text" placeholder="请输入文章标题" v-model="text" maxlength="10" show-word-limit class="margin_b" />
          <weditor id="weditor" ref="weditor"></weditor>
        </div>
        <!-- 封面和摘要 -->
        <div class="wplane paddingAll padding_t">
          <el-collapse value="1">
            <el-collapse-item name="1">
              <h6 slot="title">封面和摘要</h6>
                <div style="width: 100%;display: flex;">
                  <el-upload
                    class="avatar-uploader"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    list-type="picture-card"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload">
                    <i  class="el-icon-plus avatar-uploader-icon"></i>
                  </el-upload>
                  <el-input type="textarea" 
                    placeholder="选填，如果不填写会默认抓取正文前60个字" 
                    v-model="text" 
                    maxlength="10" 
                    style="height: 148px;"
                    show-word-limit 
                    class="margin_l" />
                </div>
            </el-collapse-item>
          </el-collapse>
        </div>
        <!-- 文章设置 -->
        <div class="wplane paddingAll padding_t">
          <el-collapse value="2">
            <el-collapse-item name="2" >
              <h6 slot="title">文章设置</h6>
                <div class="w_flex margin_b">
                  <span class="radio_labers">文章来源：</span>
                  <span>
                    <el-radio v-model="radio" label="1">备选项</el-radio>
                    <el-radio v-model="radio" label="2">备选项</el-radio>
                  </span>
                </div>
                <el-input type="text" placeholder="请输入文章标题" v-model="text" maxlength="10" show-word-limit class="margin_b" />
                <div style="width: 100%;display: flex;">
                  <el-radio class="margin_t" v-model="radio" label="1">原文链接 </el-radio>
                  <el-input type="text" placeholder="请输入文章标题" v-model="text" maxlength="10" show-word-limit class="margin_b" />
                </div>
            </el-collapse-item>
          </el-collapse>
        </div>
        <!-- 自定义文章SEO信息 -->
        <div class="wplane paddingAll padding_t">
          <el-collapse value="3">
            <el-collapse-item name="3" >
                <h6 slot="title">自定义文章SEO信息</h6>
                <div class="margin_b" style="width: 100%;display: flex;">
                  <div class="info_box flex_center">
                    <div >
                        <h6>描述内容:</h6>
                        <p>字数控制到80-150最佳</p>
                    </div>
                  </div>
                  <el-input type="textarea" 
                    placeholder="选填，如果不填写会默认抓取正文前60个字" 
                    v-model="text" 
                    maxlength="10" 
                    style="height: 100px;"
                    show-word-limit 
                    class="margin_l" />
                </div>
                <div style="width: 100%;display: flex;">
                  <div class="info_box flex_center">
                    <div >
                        <h6>描述内容:</h6>
                        <p>字数控制到80-150最佳</p>
                    </div>
                  </div>
                  <el-input type="textarea" 
                    placeholder="选填，如果不填写会默认抓取正文前60个字" 
                    v-model="text" 
                    maxlength="10" 
                    style="height: 100px;"
                    show-word-limit 
                    class="margin_l" />
                </div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </el-col>
      <el-col :span="7" class="boxP_l">
        <!-- 发布 -->
        <div class="wplane paddingAll padding_t">
          <div class="textInfoTitle">发布</div>
          <div class="flex_rowBetwen textRowMaring">
            <div class="textInfoText flex_center">阅读量</div>
            <el-switch v-model="switchs" active-color="#409EFF" ></el-switch>
          </div>
          <div class="flex_rowBetwen textRowMaring">
            <div class="textInfoText flex_center">阅读量</div>
            <el-input  class="textWid" />
          </div>
          <div class="t_c margin_t">
            <el-button  type="primary" plain>预览</el-button>
            <el-button  type="primary" >发布</el-button>
          </div>
        </div>
        <!-- 文章分类 -->
        <div class="wplane paddingAll padding_t">
          <el-collapse value="3">
            <el-collapse-item name="3" >
              <h6 slot="title">文章分类</h6>
              <el-select style="width: 100%;" v-model="select"  placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              <div class="t_c margin_t">
                <el-button  type="text" icon="el-icon-add" >添加分类</el-button>
                <transition name="fade-transform" mode="out-in">
                  <div class="margin_t">
                    <el-input placeholder="输入分类名称" />
                    <el-select style="width: 100%;" class="margin_t" v-model="select"  placeholder="选择上级分类">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                    <div class="t_r margin_t">
                      <el-button  type="primary" plain>取消</el-button>
                      <el-button  type="primary" >保存</el-button>
                    </div>
                  </div>
                </transition>
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
        <!-- 文章标签 -->
        <div class="wplane paddingAll padding_t">
          <el-collapse value="4">
            <el-collapse-item name="4" >
              <h6 slot="title">文章标签</h6>
              <div>
                <editorBtn index="1" value="test"/>
                <editorBtn index="1" value="test"/>
                <editorBtn index="1" value="test"/>
                <editorBtn index="1" value="test"/>
                <editorBtn index="1" value="test"/>
                <editorBtn index="1" value="test"/>
              </div>
              <div class="t_r margin_t">
                <el-button  type="primary" plain>取消</el-button>
                <el-button  type="primary" >保存</el-button>
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
        <!--阅读权限-->
        <div class="wplane paddingAll padding_t">
          <el-collapse value="5">
            <el-collapse-item name="5" >
              <h6 slot="title">阅读权限</h6>
              <div class="textInfoText margin_tb">阅读权限：</div>
              <el-radio v-model="sradio" label="1">备选项</el-radio>
              <el-radio v-model="sradio" label="2">备选项</el-radio>
              <div class="textInfoText margin_tb">指定等级：</div>
              <el-select v-model="select"  placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-collapse-item>
          </el-collapse>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import weditor from "@/components/wangeditor/index"
import editorBtn from "@/components/editorBtn"
export default {
  name: 'articleAdd',
  components: {
    weditor,
    editorBtn
  },
  data() {
    return {
      test:"",
      bolen:false,
      rows:{minRows: 2, maxRows: 6},
      text: "",
      imageUrl:"",
      radio:1,
      sradio:1,
      switchs:false,
      select:"",
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
    }
  },
  methods:{
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    }
  }
};

</script>
<style lang="scss" scoped>

</style>
 