import React from "react";
import { Dropdown, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBListGroup, MDBListGroupItem, MDBCol } from "mdbreact";
import './DropdownPage.css'; 

const DropdownPage = () => {
  return (

    


    <MDBListGroup>
     <MDBListGroupItem className="myDIV"><a href="default.asp">RID소개</a></MDBListGroupItem>
          <MDBListGroup className="hide">
             <MDBListGroupItem className="myDIV"><a href="news.asp">인사말</a></MDBListGroupItem>
             <MDBListGroupItem className="myDIV"><a href="contact.asp">프로필</a></MDBListGroupItem>
              <MDBListGroupItem className="myDIV"><a href="about.asp">주요경력</a></MDBListGroupItem>
          </MDBListGroup>
  
     </MDBListGroup>



    // <MDBDropdown id="Dropdown_top_nav">
    //   <MDBDropdownToggle color="transparent" >
    //     MDBDropdown
    //   </MDBDropdownToggle>
    //   <MDBDropdownMenu basic>
    //     <MDBDropdownItem>Action</MDBDropdownItem>
    //     <MDBDropdownItem>Another Action</MDBDropdownItem>
    //     <MDBDropdownItem>Something else here</MDBDropdownItem>
    //     <MDBDropdownItem divider />
    //     <MDBDropdownItem>Separated link</MDBDropdownItem>
    //   </MDBDropdownMenu>
    // </MDBDropdown>
  );
}

export default DropdownPage;