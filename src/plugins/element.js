import Vue from 'vue'
import { Autocomplete, Badge, Row, Col, Button, Popover, InputNumber, Form, FormItem, Input, Pagination,
  Dialog, Checkbox, Container, Aside, Main, Breadcrumb, BreadcrumbItem, Table, TableColumn, Select, MessageBox,
  Message, Option, DatePicker, TimePicker, Switch, CheckboxGroup, Radio, RadioGroup, Menu, MenuItem
} from 'element-ui'

Vue.use(Autocomplete)
Vue.use(Badge)
Vue.use(Row)
Vue.use(Col)
Vue.use(Button)
Vue.use(Popover)
Vue.use(InputNumber)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Dialog)
Vue.use(Checkbox)
Vue.use(Container)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Pagination)
Vue.use(Select)
Vue.use(Option)
Vue.use(DatePicker)
Vue.use(TimePicker)
Vue.use(Switch)
Vue.use(CheckboxGroup)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(Menu)
Vue.use(MenuItem)

Vue.prototype.$msgbox = MessageBox
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
