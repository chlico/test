<template>
  <el-container>
    <el-aside width="200px">
      <el-menu
        background-color="#e5ebff"
        active-text-color="#4878FA"
        :default-active="activeMenu"
        text-color="#333"
        class="el-menu-vertical-demo"
      >
        <el-submenu index="1" class="subject">
          <template slot="title" >
            <span>分类导航</span>
          </template>
          <div v-for="(value, key) in type" :key="value">
            <el-menu-item :index="key" @click="handleType">
              <i class="icon"></i>
              {{ value }}
            </el-menu-item>
          </div>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-main>
      <div class="search-top">
        <span class="fl">
          <el-input
            size="small"
            style="width: 300px"
            placeholder="请输入工程名称"
            suffix-icon="el-icon-search"
            v-model="searchList.fd_project_name"
          >
          </el-input>
        </span>
        <span class="fr">
          <el-button size="small" type="primary" icon="el-icon-search" @click="search(1,listviewId)">搜索</el-button
          >
          <el-button size="small" plain @click="show = !show">{{ show?'收缩筛选':'展开筛选'}}</el-button>
        </span>
      </div>
      <el-divider v-if="show"></el-divider>
      <el-collapse-transition>
        <div v-show="show" class="search-collapse">
          <div class="search-item">
            <div class="search-title fl">工程号</div>
            <div class="fl">
              <el-input
                size="small"
                style="width: 300px"
                placeholder="请输入工程号"
                v-model="searchList.fd_project_no"
              >
              </el-input>
            </div>
          </div>
          <el-divider></el-divider>
          <div class="search-item">
            <div class="search-title fl">项目建设投资额</div>
            <div class="fl">
              <el-input
                size="small"
                style="width: 120px"
                placeholder="请输入数字"
                v-model="searchList.fd_project_amount1"
              >
              </el-input>
              --
              <el-input
                size="small"
                style="width:120px"
                placeholder="请输入数字"
                v-model="searchList.fd_project_amount2"
              >
              </el-input>
            </div>
          </div>
          <el-divider></el-divider>
          <div class="search-item">
            <div class="search-title fl">客户名称</div>
            <div class="fl">
              <el-input
                size="small"
                style="width: 300px"
                placeholder="请输入客户名称"
                v-model="searchList.fd_customer_name"
              >
              </el-input>
            </div>
          </div>
          <el-divider></el-divider>
          <div class="search-item">
            <div class="search-title fl">项目负责人</div>
            <div class="fl">
              <el-input
                size="small"
                style="width: 300px"
                placeholder="请输入项目负责人姓名"
                v-model="searchList.fd_project_majorname"
              >
              </el-input>
            </div>
          </div>
          <el-divider></el-divider>
          <div class="search-item">
            <div class="search-title fl">项目成员</div>
            <div class="fl">
              <el-input
                size="small"
                placeholder="请输入项目成员姓名"
                v-model="searchList.fdProjectMember"
              >
              </el-input>
            </div>
          </div>
          <el-divider></el-divider>
          <div class="search-item">
            <div class="search-title fl">规模指标1</div>
            <div class="fl">
              <el-select size="small" v-model="searchList.fdProjectType1" placeholder="请选择">
                <el-option value="">请选择</el-option>
                <el-option value="污水厂(万立方米/日)"></el-option>
                <el-option value="排放标准"></el-option>
                <el-option value="净水厂(万立方米/日)"></el-option>
                <el-option value="泵站(万立方米/日)"></el-option>
                <el-option value="管径(毫米)"></el-option>
                <el-option value="管长(米)"></el-option>
                <el-option value="市政道路等级"></el-option>
                <el-option value="市政道路红线宽度(米)"></el-option>
                <el-option value="市政道路总长度(米)"></el-option>
                <el-option value="市政道路设计时速(千米/小时)"></el-option>
                <el-option value="公路等级"></el-option>
                <el-option value="公路红线宽度(米)"></el-option>
                <el-option value="公路总长度(米)"></el-option>
                <el-option value="公路设计时速(千米/小时)"></el-option>
                <el-option value="桥梁单跨最大长度(米)"></el-option>
                <el-option value="桥梁总长度(米)"></el-option>
                <el-option value="风景园林面积(平方米)"></el-option>
                <el-option value="风景园林工程投资(万元)"></el-option>
                <el-option value="规划类型"></el-option>
                <el-option value="规划人口(万人)"></el-option>
                <el-option value="规划面积(平方公里)"></el-option>
                <el-option value="建筑面积(平方米)"></el-option>
                <el-option value="最大建筑高度(米)"></el-option>
                <el-option value="固废工程类型"></el-option>
                <el-option value="固废处理量(吨/日)"></el-option>
                <el-option value="水库容积(立方米)"></el-option>
                <el-option value="隧洞洞径(米)"></el-option>
                <el-option value="隧洞长度(米)"></el-option>
                <el-option value="排涝泵站(立方米/秒)"></el-option>
                <el-option value="引调水泵站(立方米/秒)"></el-option>
                <el-option value="其他"></el-option>
              </el-select>
            </div>
            <div class="search-title fl">规模值</div>
            <div class="fl">              
              <el-input
                size="small"
                style="width: 120px"
                placeholder="请输入数字"
                v-model="searchList.fdProjectScale1"
              >
              </el-input>
              --
              <el-input
                size="small"
                style="width:120px"
                placeholder="请输入数字"
                v-model="searchList.fdProjectScale2"
              >
              </el-input>
            </div>
          </div>
          <el-divider></el-divider>
          <div class="search-item">
            <div class="search-title fl">规模指标2</div>
            <div class="fl">
              <el-select size="small" v-model="searchList.fdProjectType2" placeholder="请选择">
                <el-option value="">请选择</el-option>
                <el-option value="污水厂(万立方米/日)"></el-option>
                <el-option value="排放标准"></el-option>
                <el-option value="净水厂(万立方米/日)"></el-option>
                <el-option value="泵站(万立方米/日)"></el-option>
                <el-option value="管径(毫米)"></el-option>
                <el-option value="管长(米)"></el-option>
                <el-option value="市政道路等级"></el-option>
                <el-option value="市政道路红线宽度(米)"></el-option>
                <el-option value="市政道路总长度(米)"></el-option>
                <el-option value="市政道路设计时速(千米/小时)"></el-option>
                <el-option value="公路等级"></el-option>
                <el-option value="公路红线宽度(米)"></el-option>
                <el-option value="公路总长度(米)"></el-option>
                <el-option value="公路设计时速(千米/小时)"></el-option>
                <el-option value="桥梁单跨最大长度(米)"></el-option>
                <el-option value="桥梁总长度(米)"></el-option>
                <el-option value="风景园林面积(平方米)"></el-option>
                <el-option value="风景园林工程投资(万元)"></el-option>
                <el-option value="规划类型"></el-option>
                <el-option value="规划人口(万人)"></el-option>
                <el-option value="规划面积(平方公里)"></el-option>
                <el-option value="建筑面积(平方米)"></el-option>
                <el-option value="最大建筑高度(米)"></el-option>
                <el-option value="固废工程类型"></el-option>
                <el-option value="固废处理量(吨/日)"></el-option>
                <el-option value="水库容积(立方米)"></el-option>
                <el-option value="隧洞洞径(米)"></el-option>
                <el-option value="隧洞长度(米)"></el-option>
                <el-option value="排涝泵站(立方米/秒)"></el-option>
                <el-option value="引调水泵站(立方米/秒)"></el-option>
                <el-option value="其他"></el-option>
              </el-select>
            </div>
            <div class="search-title fl">规模值</div>
            <div class="fl">
              <el-input
                size="small"
                style="width: 120px"
                placeholder="请输入数字"
                v-model="searchList.fdProjectScale3"
              >
              </el-input>
              --
              <el-input
                size="small"
                style="width:120px"
                placeholder="请输入数字"
                v-model="searchList.fdProjectScale4"
              >
              </el-input>
            </div>
          </div>
          <el-divider></el-divider>
          <div class="search-item">
            <div class="search-title fl">规模指标3</div>
            <div class="fl">
              <el-select size="small" v-model="searchList.fdProjectType3" placeholder="请选择">
                <el-option value="">请选择</el-option>
                <el-option value="污水厂(万立方米/日)"></el-option>
                <el-option value="排放标准"></el-option>
                <el-option value="净水厂(万立方米/日)"></el-option>
                <el-option value="泵站(万立方米/日)"></el-option>
                <el-option value="管径(毫米)"></el-option>
                <el-option value="管长(米)"></el-option>
                <el-option value="市政道路等级"></el-option>
                <el-option value="市政道路红线宽度(米)"></el-option>
                <el-option value="市政道路总长度(米)"></el-option>
                <el-option value="市政道路设计时速(千米/小时)"></el-option>
                <el-option value="公路等级"></el-option>
                <el-option value="公路红线宽度(米)"></el-option>
                <el-option value="公路总长度(米)"></el-option>
                <el-option value="公路设计时速(千米/小时)"></el-option>
                <el-option value="桥梁单跨最大长度(米)"></el-option>
                <el-option value="桥梁总长度(米)"></el-option>
                <el-option value="风景园林面积(平方米)"></el-option>
                <el-option value="风景园林工程投资(万元)"></el-option>
                <el-option value="规划类型"></el-option>
                <el-option value="规划人口(万人)"></el-option>
                <el-option value="规划面积(平方公里)"></el-option>
                <el-option value="建筑面积(平方米)"></el-option>
                <el-option value="最大建筑高度(米)"></el-option>
                <el-option value="固废工程类型"></el-option>
                <el-option value="固废处理量(吨/日)"></el-option>
                <el-option value="水库容积(立方米)"></el-option>
                <el-option value="隧洞洞径(米)"></el-option>
                <el-option value="隧洞长度(米)"></el-option>
                <el-option value="排涝泵站(立方米/秒)"></el-option>
                <el-option value="引调水泵站(立方米/秒)"></el-option>
                <el-option value="其他"></el-option>
              </el-select>
            </div>
            <div class="search-title fl">规模值</div>
            <div class="fl">
              <el-input
                size="small"
                style="width: 300px"
                placeholder="请输入文字"
                v-model="searchList.fdProjectScale5"
              >
              </el-input>
              
            </div>
            
          </div>
        </div>
      </el-collapse-transition>
      <el-divider></el-divider>
      <el-table :show-header="false" :data="tableData" class="list"  @row-click="handleDetail">
         <el-table-column          
          type="index"
          width="50">
        </el-table-column>
        <el-table-column>
          <template slot-scope="scope">
           <h4>{{ scope.row[5].value }}</h4>
           <p class="list-remark">
              <span>{{ scope.row[6].value }}</span>             
           </p>
           <p>
              <span>项目类型：{{ scope.row[1].value }}</span>             
              <span>项目负责人：{{ scope.row[4].value }}</span>
              <span>项目金额：{{ scope.row[3].value }}</span>
              <span>客户名称：{{ scope.row[2].value }}</span>
           </p>
           <p>   
              <span>文档状态：{{ scope.row[7].value }}</span>
              <span>当前环节：{{ scope.row[8].value }}</span>
              <span>当前处理人：{{ scope.row[9].value }}</span>
           </p>           
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination
          v-show="total"
          @size-change="limitChange"
          @current-change="currentChange"
          :current-page="searchList.pageno"
          :page-sizes="[15, 30, 50, 100, 200]"
          :page-size="searchList.rowsize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
        ></el-pagination>
      </div>
    </el-main>
  </el-container>
</template>
<script>
import { getData } from "@/api";
export default {
  name: "home",
  data() {
    return {
      tableData: [],
      activeMenu: "1-1",
      type: {
        "1-1": "设计咨询",
        "1-2": "勘察测绘",
        "1-3": "工程检测",
        "1-4": "工程监理",
        "1-5": "总承包/施工",
      },
      currentType: "设计咨询",
      show: false,
      searchList: {
        fdProjectScale1: "",
        fdProjectScale2: "",
        fdProjectScale3: "",
        fdProjectScale4: "",
        fdProjectType1: "",
        fdProjectType2: "",
        fdProjectType3: "",
        fd_customer_name: "",
        fd_project_majorname:"",
        fd_project_amount1: '',
        fd_project_amount2:'',
        fdProjectMember:"",
        fd_project_no: "",
        fd_project_name: "",
        pageno: 1,
        rowsize: 15,       
      },
      total: 0,
      listviewId:'18184d13b1ecf14f529c5e4429c82844'
    };
  },
  methods: {
    handleDetail(row){      
      let routeUrl = this.$router.resolve({
        name: 'detail',
        query:{fid:row[0].value}
      })
      window.open(routeUrl.href,'_blank');
      // this.$router.push({
      //   name: 'detail',
      //   query:{fid:row[0].value}
      // })
    },
    async search(p,listviewId) {
      if (p) {
        this.searchList.pageno = p;
      }
      let params = { ...this.searchList };
      for (let key in params) {
        if (!params[key]) {
          delete params[key];
        }
      }
      let res = await getData(params,listviewId);
      this.tableData = res.datas;
      this.total = parseInt(res.page.totalSize);
    },
    handleType(e) {
      this.currentType = this.type[e.index];
      console.log(this.currentType);
    },
    currentChange: function (page) {
      this.searchList.pageno = page;
      this.search(page,this.listviewId);
    },
    limitChange: function (limit) {
      this.searchList.rowsize = limit;
      this.search(1,this.listviewId);
    },
  },
  mounted() {
    this.search(1,this.listviewId);
  },
  created(){
    if(this.$route.query.listviewId){
     this.listviewId=this.$route.query.listviewId
    }
    if(this.$route.query.name){
      this.show = true
      this.searchList.fdProjectMember = this.$route.query.name
    }
  }
};
</script>
<style scoped>
.el-aside {
  background-color: #e5ebff;
  line-height: 44px;
  min-height: 100vh;
  overflow: hidden;
  margin-right:12px;
}
.el-main {
  background-color: #fff;
  padding: 20px; 
}

.el-container {
   background:#f7f7f7;
  font-size:12px;
  color: #7b7a7b; 
  font-family: "PingFang SC", "Lantinghei SC", "Helvetica Neue", Arial, "Microsoft YaHei", "WenQuanYi Micro Hei", "Heiti SC", "Segoe UI",  sans-serif;
}

.pagination {
  margin-top: 20px;
  text-align: center;
}
.search-top {
  overflow: hidden;
  padding-bottom:12px;
}
.search-collapse {
  color: #7b7a7b;
  line-height: 36px;
  overflow: hidden;
}
.search-item {
  height: 36px;
  overflow: hidden;
  vertical-align: middle;
  font-size: 12px;
}
.search-item .search-title {
  display: inline-block;
  width: 150px;
  text-align: right;
  margin-right: 10px;
}
.el-divider--horizontal {
  margin: 6px 0;
  font-size:0;
}
.list{
  width:100%;  
}
.list h4{
  margin-top:-6px;
  line-height:40px;
}
.list p{
  font-size: 12px;
}
.list span{  
  display: inline-block;
  min-width: 200px;
}
.icon{
  margin-right:6px;
}
.icon:before {
  content: "";
  display: inline-block;
  width: 0px;
  height: 0px;
  border: 2px solid;
  border-radius: 50%;
  vertical-align: middle;
}
.list-remark{
  width: 90%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

</style>