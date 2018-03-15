import Home from '../routers/Home'
import ModuleList from '../routers/ModuleManage/ModuleList'
import FunctionList from '../routers/FunctionManage/FunctionList'
import RoleList from '../routers/RoleManage/RoleList'
import EmployeesList from '../routers/EmployeesManage/EmployeesList'
import UserList from '../routers/UserManage/UserList'
import UserOrder from '../routers/UserManage/UserOrder'
import UserManager from '../routers/UserManage/UserManager'
import EndOrder from '../routers/UserManage/EndOrder'
import VisualList from '../routers/VisualManage/VisualList'
import PriceConfig from '../routers/PriceManage/PriceConfig'

export default
[{
    'path': '/home',
    'component': Home,
    'exactly': true
}, {
    'path': '/moduleManage/moduleList',
    'component': ModuleList
}, {
    'path': '/functionManage/functionList',
    'component': FunctionList
}, {
    'path': '/roleManage/roleList',
    'component': RoleList
}, {
    'path': '/employeesManage/employeesList',
    'component': EmployeesList
}, {
    'path': '/userManage/userList',
    'component': UserList
}, {
    'path': '/userManage/userOrder',
    'component': UserOrder
}, {
    'path': '/userManage/userManager',
    'component': UserManager
}, {
    'path': '/userManage/endOrder',
    'component': EndOrder
}, {
    'path': '/visualManage/visualList',
    'component': VisualList
}, {
    'path': '/priceManage/priceConfig',
    'component': PriceConfig
}];