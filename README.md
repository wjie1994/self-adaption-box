# self-adaption-box

### 项目简介
    自适应缩放容器，适用于vue -- pc大屏可视化项目

### 安装插件
    npm i -S self-adaption-box

### 使用插件

##### 全局引入
```javascript
import SelfAdaptionBox from 'self-adaption-box'
Vue.use(SelfAdaptionBox)
```

##### 局部引入
```javascript
import { SelfAdaptionBox } from 'self-adaption-box'
components: { SelfAdaptionBox }
```
*注意：都需要引入样式*
```javascript
import 'self-adaption-box/dist/SelfAdaptionBox.css'
```

### 参数说明
| 参数 | 类型 | 必填 | 说明 | 默认值 |  
| ---- | ---- | ---- | ---- | ---- |    
| width | number | 是 | 设计图宽度 | 0 |
| height | number | 是 | 设计图高度 | 0 |
