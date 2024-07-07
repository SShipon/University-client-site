import { Layout, Menu } from 'antd';
import { sidebarItemsGenerator } from '../../utils/sidebarItemsGenerator';
import { adminPaths } from '../../routes/admin.routes';
import { facultyPaths } from '../../routes/faculty.routes';
import { StudentPaths } from '../../routes/student.routes';
const {  Sider } = Layout;

const userRole ={
  ADMIN: "admin",
  FACULTY: "faculty",
  STUDENT: "student"

}

const Sidebar = () => {

  const role  = 'student'
  let sidebarItem;
  
  switch (role) {
    case userRole.ADMIN: sidebarItem = sidebarItemsGenerator(adminPaths, userRole.ADMIN) 
      
      break;
  
    default:
      break;
  }
  switch (role) {
    case userRole.FACULTY: sidebarItem = sidebarItemsGenerator(facultyPaths, userRole.FACULTY) 
      
      break;
  
    default:
      break;
  }
  switch (role) {
    case userRole.STUDENT: sidebarItem = sidebarItemsGenerator(StudentPaths, userRole.STUDENT) 
      
      break;
  
    default:
      break;
  }

    return (
        <Sider
        breakpoint="lg"
        collapsedWidth="0"
      >
        <div style={{color:"white", height:'4rem', display:'flex', justifyContent:"center", alignItems:"center" }}>
          <h1>PH UNIVERSITY</h1>
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={sidebarItem} />
      </Sider>
    );
};

export default Sidebar;