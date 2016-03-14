<template>
<div class="demo-item demo-item-rich-text">
    <p v-show="rich_text_data.item.title&&rich_text_data.item.title!=''&&rich_text_data.item.title!=null" class="demo-desc ui-whitespace padtb15">
      {{rich_text_data.item.title}}
    </p>
    <div v-if="rich_text_data.item.imgPath!=null&&rich_text_data.item.imgPath!=''" class="tree_box_content_img">
      <a :href="rich_text_data.item.imgPath_view_link">
        <img :src="rich_text_data.item.imgPath" alt="" width="100%">
      </a>
    </div>
    <div v-show="check_contetent(rich_text_data.item.content)" class="padtb15 desc ui-whitespace">
      <div v-show="rich_text_data.unfold =='0' " class="inner_text font14">
        {{{rich_text_data.item.content}}}
      </div>
      <div class="show_content"  v-show="rich_text_data.unfold !='0' ">
        <div class="desc font14">
          {{{rich_text_data.item.content}}}
          <div class="cl"></div>
        </div>
      </div>
        <div  v-show="rich_text_data.unfold =='0' " class="halffold_div1 ui-border-t ui-panel ui-panel-simple magt10"  onclick="show2_content(this)"><span class="ui-panel-title-tips">阅读全文</span><i class="text-unfold"></i><i class="text-fold"></i></div>
    </div>
</div>
</template>

<script>
export default {
  props:['list','msg1'],
  methods:{
    check_contetent:function(content){
      if(content!='<div class="rich_text"></div>' && content!=''){
        return true;
      }else{
        return false;
      }
    }
  },
  data () {
    return {
      rich_text_data:this.list
    }
  }
}
</script>
