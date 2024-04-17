<template>
  <div class="detail-box">
    <div class="btn-edit">
      <el-button
        type="primary"
        plain
        v-if="totalData.fd_historybutton.canedit"
        icon="el-icon-document"
        @click="edit(totalData.fd_historybutton.url)"
        >历史记录</el-button
      >
      <el-button
        v-if="totalData.editinfo.canedit"
        type="primary"
        icon="el-icon-edit"
        @click="edit(totalData.editinfo.url)"
        >编辑</el-button
      >
    </div>
    <h2>{{ totalData.fd_project_name }}</h2>
    <ul id="nav" :class="isFixed ? 'nav fixed' : 'nav'">
      <li :class="{ active: shows == '#intro' }" @click="jump('#intro')">
        项目简介
      </li>
      <li :class="{ active: shows == '#menber' }" @click="jump('#menber')">
        项目成员
      </li>
      <li :class="{ active: shows == '#shenhe' }" @click="jump('#shenhe')">
        批复、审查、验收证明
      </li>
      <li :class="{ active: shows == '#file' }" @click="jump('#file')">
        成果文件、精品图片、视频
      </li>
      <li
        :class="{ active: shows == '#projectType' }"
        @click="jump('#projectType')"
      >
        项目规模
      </li>
      <li :class="{ active: shows == '#htName' }" @click="jump('#htName')">
        项目合同
      </li>
      <li :class="{ active: shows == '#news' }" @click="jump('#news')">
        新闻报道
      </li>
      <li :class="{ active: shows == '#wen' }" @click="jump('#wen')">
        获奖、专利、论文、复盘
      </li>
      <li :class="{ active: shows == '#total' }" @click="jump('#total')">
        项目总结
      </li>
    </ul>
    <div v-if="isFixed" style="height: 60px; width: 100%"></div>
    <div class="content">
      <div class="content-l">
        <img
          v-if="totalData.fd_project_pic"
          :src="totalData.fd_project_pic"
          width="840"
          height="380"
          class="project_pic"
        />
        <a
          id="intro"
          style="
            position: relative;
            top: -60px;
            display: block;
            height: 0;
            overflow: hidden;
          "
        ></a>
        <h4 class="title">项目简介</h4>
        <div class="basic_info">
          <ul class="basic_info_list">
            <li>
              <div class="info_item">
                <div class="item_title">工程号</div>
                <el-tooltip
                  effect="light"
                  :content="totalData.fd_project_no + ''"
                  placement="top-start"
                >
                  <div class="item_subtext">{{ totalData.fd_project_no }}</div>
                </el-tooltip>
              </div>
              <div class="info_item">
                <div class="item_title">客户名称</div>
                <el-tooltip
                  effect="light"
                  :content="totalData.fd_customer_name + ''"
                  placement="top-start"
                >
                  <div class="item_subtext">
                    {{ totalData.fd_customer_name }}
                  </div>
                </el-tooltip>
              </div>
              <div class="info_item">
                <div class="item_title">项目负责人</div>
                <el-tooltip
                  effect="light"
                  :content="totalData.fd_project_head_name + ''"
                  placement="top-start"
                >
                  <div class="item_subtext">
                    {{ totalData.fd_project_head_name }}
                  </div>
                </el-tooltip>
              </div>
            </li>
            <li>
              <div class="info_item">
                <div class="item_title">工程名称</div>
                <el-tooltip
                  effect="light"
                  :content="totalData.fd_project_name + ''"
                  placement="top-start"
                >
                  <div class="item_subtext">
                    {{ totalData.fd_project_name }}
                  </div>
                </el-tooltip>
              </div>
              <div class="info_item">
                <div class="item_title">项目地点</div>
                <el-tooltip
                  effect="light"
                  :content="totalData.fd_project_address + ''"
                  placement="top-start"
                >
                  <div class="item_subtext">
                    {{ totalData.fd_project_address }}
                  </div>
                </el-tooltip>
              </div>
              <div class="info_item">
                <div class="item_title">文档状态</div>
                <el-tooltip
                  effect="light"
                  :content="totalData.fd_status + ''"
                  placement="top-start"
                >
                  <div class="item_subtext">
                    {{ totalData.fd_status }}
                  </div>
                </el-tooltip>
              </div>
            </li>
            <li>
              <div class="info_item">
                <div class="item_title">项目类型</div>
                <el-tooltip
                  effect="light"
                  :content="totalData.fd_project_type + ''"
                  placement="top-start"
                >
                  <div class="item_subtext">
                    {{ totalData.fd_project_type }}
                  </div>
                </el-tooltip>
              </div>
              <div class="info_item">
                <div class="item_title">项目建设投资额</div>
                <el-tooltip
                  effect="light"
                  :content="totalData.fd_project_amount + ''"
                  placement="top-start"
                >
                  <div class="item_subtext">
                    {{ totalData.fd_project_amount }}
                  </div>
                </el-tooltip>
              </div>
            </li>
          </ul>
        </div>
        <a
          id="menber"
          style="
            position: relative;
            top: -60px;
            display: block;
            height: 0;
            overflow: hidden;
          "
        ></a>
        <h4 class="title">项目成员 - {{ fd_project_stage }}</h4>
        <el-carousel :loop="false" :autoplay="false" height="160px">
          <el-carousel-item
            class="el-car-item"
            v-for="(mContent, index) in fd_project_menbers"
            :key="index"
          >
            <ul class="menbers">
              <li v-for="menber in mContent" :key="menber.fd_menbername">
                <el-avatar :size="60" v-if="menber.fd_photo">
                  <img :src="menber.fd_photo" width="60" height="60" />
                </el-avatar>
                <div class="name" @click="toSearch(menber.fd_menbername)">
                  {{ menber.fd_menbername }}
                </div>
                <div class="message">
                  <p>角色：{{ menber.fd_role }}</p>
                  <p>所在部门：{{ menber.fd_dept }}</p>
                </div>
              </li>
            </ul>
          </el-carousel-item>
        </el-carousel>
        <a
          id="shenhe"
          style="
            position: relative;
            top: -60px;
            display: block;
            height: 0;
            overflow: hidden;
          "
        ></a>
        <h4 class="title">批复、审查、验收证明</h4>
        <ul class="file-box">
          <li v-for="(item, index) in zmArr" :key="item.filename + index">
            <a :href="item.url" target="_blank">
              <p class="icon fl"><img :src="item.icon" width="32" /></p>
              <p class="file-name fl">{{ item.filename }}</p>
              <p class="file-size fl">{{ item.filesize }}</p>
              <el-tooltip effect="dark" content="阅读" placement="top">
                <img
                  src="../../assets/file-link.png"
                  width="20"
                  class="file-link fr"
                />
              </el-tooltip>
            </a>
          </li>
        </ul>
        <div style="text-align: center" v-if="[...totalData.fd_acceptancemx,...totalData.fd_censorfilemx,...totalData.fd_replyfile_mx].length > 0">
          <el-pagination
          :current-page="zmArrNo"
          :page-size="5"
          :total="[...totalData.fd_acceptancemx,...totalData.fd_censorfilemx,...totalData.fd_replyfile_mx].length"
          background
          layout="prev,pager,next"
          @current-change="changeZmArr"
        ></el-pagination>
        </div>
        <a
          id="file"
          style="
            position: relative;
            top: -60px;
            display: block;
            height: 0;
            overflow: hidden;
          "
        ></a>
        <h4 class="title">成果文件、精品图片、视频</h4>
        <ul class="file-box">
          <li
            v-for="(item, index) in cgArr" :key="index"
          >
           <template v-if="item.subject">
              <a :href="item.url" target="_blank">
                <p class="icon1 fl">
                  <img src="../../assets/icon-link.png" width="32" />
                </p>
                <p class="file-name fl">{{ item.subject }}</p>
              </a>
           </template>
           <template v-else>
              <a :href="item.url" target="_blank">
                <p class="icon fl"><img :src="item.icon" width="32" /></p>
                <p class="file-name fl">{{ item.filename }}</p>
                <p class="file-size fl">{{ item.filesize }}</p>
                <el-tooltip effect="dark" content="阅读" placement="top">
                  <img
                    src="../../assets/file-link.png"
                    width="20"
                    class="file-link fr"
                  />
                </el-tooltip>
              </a>
           </template>
          </li>
        </ul>
        <div style="text-align: center" v-if="[...totalData.fd_achievement_file,...totalData.fd_pic_video].length > 0">
          <el-pagination
          :current-page="cgArrNo"
          :page-size="5"
          :total="[...totalData.fd_achievement_file,...totalData.fd_pic_video].length"
          background
          layout="prev,pager,next"
          @current-change="changeCgArr"
        ></el-pagination>
        </div>
        <a
          id="wen"
          style="
            position: relative;
            top: -60px;
            display: block;
            height: 0;
            overflow: hidden;
          "
        ></a>
        <h4 class="title">获奖、专利、论文、复盘</h4>
        <ul class="file-box">
          <li v-for="item in totalData.fd_award_info" :key="item.subject">
            <a :href="item.url" target="_blank">
              <p class="icon1 fl">
                <img src="../../assets/icon-link.png" width="32" />
              </p>
              <p class="file-name fl">{{ item.subject }}</p>
            </a>
          </li>
          <li v-for="item in totalData.fd_patent" :key="item.subject">
            <a :href="item.url" target="_blank">
              <p class="icon1 fl">
                <img src="../../assets/icon-link.png" width="32" />
              </p>
              <p class="file-name fl">{{ item.subject }}</p>
            </a>
          </li>
          <li v-for="item in totalData.fd_thesis" :key="item.subject">
            <a :href="item.url" target="_blank">
              <p class="icon1 fl">
                <img src="../../assets/icon-link.png" width="32" />
              </p>
              <p class="file-name fl">{{ item.subject }}</p>
            </a>
          </li>
        </ul>
        <a
          id="total"
          style="
            position: relative;
            top: -60px;
            display: block;
            height: 0;
            overflow: hidden;
          "
        ></a>
        <h4 class="title">项目总结</h4>
        <div v-html="totalData.fd_project_summary"></div>
        <!-- <el-collapse v-model="activeNames" accordion>
          <el-collapse-item
            v-for="(item, index) in totalData.fd_project_summarymx"
            :title="item.phasename"
            :name="index"
            :key="index"
          >
            <strong>{{ item.ismain == 1 ? "主要阶段" : "非主要阶段" }}</strong>
            <div>{{ item.summary }}</div>
          </el-collapse-item>
        </el-collapse> -->
      </div>
      <div class="content-r">
        <a
          id="projectType"
          style="
            position: relative;
            top: -60px;
            display: block;
            height: 0;
            overflow: hidden;
          "
        ></a>
        <h4 class="title">项目规模</h4>
        <ul class="lists projectType">
          <li v-for="(item, index) in totalData.fd_project_detail" :key="index">
            {{ item.fd_scale_msg }}
          </li>
        </ul>
        <a
          id="htName"
          style="
            position: relative;
            top: -60px;
            display: block;
            height: 0;
            overflow: hidden;
          "
        ></a>
        <h4 class="title">项目合同</h4>
        <ul class="lists">
          <li v-for="(item, index) in totalData.fd_contract_mx" :key="index">
            <a :href="item.url" target="_blank">{{ item.filename }}</a>
          </li>
        </ul>
        <a
          id="news"
          style="
            position: relative;
            top: -60px;
            display: block;
            height: 0;
            overflow: hidden;
          "
        ></a>
        <h4 class="title">新闻报道</h4>
        <ul class="lists">
          <li v-for="(item, index) in totalData.fd_news" :key="index">
            <a :href="item.url" target="_blank">{{ item.subject }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { getDataById } from '@/api'
export default {
  data() {
    return {
      isFixed: false,
      offsetTop: 0,
      totalData: {
        editinfo: {},
        fd_historybutton: {},
        fd_acceptancemx: [],
        fd_censorfilemx: [],
        fd_replyfile_mx: [],
        fd_achievement_file:[],
        fd_pic_video:[]
      },
      fd_project_stage: '',
      fd_project_menbers: [],
      activeNames: [0],
      shows: '#intro',
      zmArrNo: 1,
      zmArr:[],
      cgArrNo: 1,
      cgArr:[]
    }
  },
  methods: {
    changeZmArr(pageNo) {
      let arr = []
      this.zmArrNo = pageNo
      this.zmArr = [...this.totalData.fd_acceptancemx,...this.totalData.fd_censorfilemx,...this.totalData.fd_replyfile_mx].slice((pageNo-1) * 5, pageNo * 5)
    },
    changeCgArr(pageNo) {
      let arr = []
      this.cgArrNo = pageNo
      this.cgArr = [...this.totalData.fd_achievement_file,...this.totalData.fd_pic_video].slice((pageNo-1) * 5, pageNo * 5)
    },
    toSearch(name) {
      let routeUrl = this.$router.resolve({
        name: 'home',
        query: { name },
      })
      window.open(routeUrl.href, '_blank')
      // this.$router.push({
      //   name: 'home',
      //   query:{name}
      // })
    },
    edit(url) {
      window.open(url, '_blank')
    },
    jump(id) {
      const returnEle = document.querySelector(id)
      this.shows = id
      if (!!returnEle) {
        returnEle.scrollIntoView({ behavior: 'smooth' })
      }
      document.querySelector(id).scrollIntoView({ behavior: 'smooth' })
    },
    async getData(id) {
      const res = await getDataById(id)
      if (res.code === '1') {
        this.totalData = res.data
        this.fd_project_stage = res.data.fd_project_menbers[0].fd_project_stage
        let data = this.totalData.fd_project_menbers
        this.zmArr = [...this.totalData.fd_acceptancemx,...this.totalData.fd_censorfilemx,...this.totalData.fd_replyfile_mx].slice(0,5)
        this.cgArr = [...this.totalData.fd_achievement_file,...this.totalData.fd_pic_video].slice(0,5)
        let newDataList = []
        let current = 0
        if (data && data.length > 0) {
          for (let i = 0; i <= data.length - 1; i++) {
            if (i % 4 !== 0 || i === 0) {
              if (!newDataList[current]) {
                newDataList.push([data[i]])
              } else {
                newDataList[current].push(data[i])
              }
            } else {
              current++
              newDataList.push([data[i]])
            }
          }
        }
        this.fd_project_menbers = [...newDataList]
      } else {
        this.$message.error('请求出错了！')
      }
    },
    initHeight() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      this.isFixed = scrollTop > this.offsetTop ? true : false
    },
  },
  created() {
    this.getData(this.$route.query.fid)
  },
  mounted() {
    window.addEventListener('scroll', this.initHeight)
    this.$nextTick(() => {
      this.offsetTop = document.querySelector('#nav').offsetTop
    })
  },
  //回调中移除监听
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
}
</script>
<style scoped>
.detail-box {
  width: 1200px;
  margin: 0 auto;
  padding-bottom: 100px;
  font-family: 'PingFang SC', 'Lantinghei SC', 'Helvetica Neue', Arial,
    'Microsoft YaHei', 'WenQuanYi Micro Hei', 'Heiti SC', 'Segoe UI', sans-serif;
  font-size: 14px;
  overflow: hidden;
  scroll-behavior: smooth;
  position: relative;
  left: 0;
  top: 0;
}
.btn-edit {
  position: absolute;
  top: 10px;
  right: 0px;
  z-index: 9999;
}
.detail-box h2 {
  text-align: center;
  margin: 20px auto 10px;
  font-size: 28px;
  color: #333;
  line-height: 1.5;
}
.nav {
  display: block;
  background: #fff;
  z-index: 99;
  width: 100%;
  overflow: hidden;
  padding-bottom: 10px;
  border-bottom: solid 1px #ccc;
}
.nav li {
  list-style-type: none;
  position: relative;
  float: left;
  padding: 25px 0 14px;
  margin-right: 40px;
  cursor: pointer;
}
.nav li.active {
  color: #4878fa;
}
.nav li.active::before {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  display: block;
  width: 36px;
  height: 3px;
  background: #4878fa;
  content: '';
}
.fixed {
  width: 1200px;
  position: fixed;
  top: 0;
  z-index: 9;
}
.content {
  overflow: hidden;
  zoom: 1;
}
.content-l {
  width: 840px;
  float: left;
}
.content-r {
  float: right;
  width: 320px;
  text-align: left;
}
.title {
  margin-bottom: 20px;
  margin-top: 30px;
  font-size: 18px;
  font-weight: bold;
  color: #333333;
}
.lists {
  padding: 0 0 0 20px;
}
.lists li {
  line-height: 30px;
  list-style-type: disc;
}
.lists li a:hover {
  color: #4878fa;
  text-decoration: underline;
}
.file-bg li {
  list-style-type: none;
}
.file-bg li img {
  margin-right: 10px;
  vertical-align: middle;
}
.basic_info {
  width: 838px;
  padding: 12px 0;
  background: #f7f8fa;
  border: 1px solid #eeeeee;
  border-radius: 4px;
}
.basic_info_list {
  overflow: hidden;
}
.basic_info_list li {
  position: relative;
  float: left;
  width: 278px;
  padding-left: 30px;
}
.basic_info_list .info_item {
  padding: 8px 0;
  margin-bottom: 8px;
  min-height: 60px;
}
.basic_info_list .item_title,
.basic_info_list .item_subtext {
  font-size: 14px;
  color: #666;
  line-height: 22px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.basic_info_list .item_subtext {
  color: #333;
  font-weight: bold;
}
.basic_info_list li::after {
  position: absolute;
  right: 0;
  top: 12px;
  width: 1px;
  height: calc(100% - 12px);
  background: #eeeeee;
  content: '';
}
.basic_info_list li:last-child::after {
  width: 0px;
}
.menbers {
  overflow: hidden;
  margin: 12px 0;
  font-size: 12px;
}
.menbers li {
  float: left;
  width: 209px;
  border-right: 1px solid #eee;
  text-align: center;
}
.menbers li:last-child {
  border-right: none;
}
.menbers li .name {
  font-size: 14px;
  font-weight: bold;
  color: #333333;
  margin: 10px 0;
}
.menbers li .message {
  line-height: 20px;
}
.menbers li .name {
  cursor: pointer;
}
.project_pic {
  border-radius: 20px;
  margin-top: 10px;
}
.projectType {
  list-style-type: none;
  padding: 12px 0 12px 30px;
  background: #f7f8fa;
  border: 1px solid #eeeeee;
  border-radius: 4px;
}
.file-box {
}
.file-box li {
  display: block;
  overflow: hidden;
  border: solid 1px #eee;
  height: 48px;
  margin-top: 12px;
  padding: 10px 6px;
  line-height: 36px;
}
.file-box li:hover {
  background: #f7f8fa;
}
.file-box li:hover .file-name {
  color: #e17d27;
}
.file-box a {
  display: block;
}
.file-box .file-name {
  width: 446px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.file-box .file-link {
  margin-top: 4px;
}
</style>
