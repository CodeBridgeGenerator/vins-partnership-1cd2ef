import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { classNames } from "primereact/utils";
import { Button } from "primereact/button";
import { TabView, TabPanel } from "primereact/tabview";
import { SplitButton } from "primereact/splitbutton";
import client from "../../../services/restClient";
import CommentsSection from "../../common/CommentsSection";
import ProjectLayout from "../../Layouts/ProjectLayout";

import SectionContentsPage from "../SectionContentsPage/SectionContentsPage";
import CaseDocumentsPage from "../CaseDocumentsPage/CaseDocumentsPage";
import HistoriesPage from "../HistoriesPage/HistoriesPage";
import TextExtractionQueuesPage from "../TextExtractionQueuesPage/TextExtractionQueuesPage";
import GroundTruthQueuesPage from "../GroundTruthQueuesPage/GroundTruthQueuesPage";

const SingleAccidentCasesPage = (props) => {
    const navigate = useNavigate();
    const urlParams = useParams();
    const [_entity, set_entity] = useState({});
  const [isHelpSidebarVisible, setHelpSidebarVisible] = useState(false);

    const [user, setUser] = useState([]);

    useEffect(() => {
        //on mount
        client
            .service("accidentCases")
            .get(urlParams.singleAccidentCasesId, { query: { $populate: [            {
                path: "createdBy",
                service: "users",
                select: ["name"],
              },{
                path: "updatedBy",
                service: "users",
                select: ["name"],
              },"user"] }})
            .then((res) => {
                set_entity(res || {});
                const user = Array.isArray(res.user)
            ? res.user.map((elem) => ({ _id: elem._id, name: elem.name }))
            : res.user
                ? [{ _id: res.user._id, name: res.user.name }]
                : [];
        setUser(user);
            })
            .catch((error) => {
                console.log({ error });
                props.alert({ title: "AccidentCases", type: "error", message: error.message || "Failed get accidentCases" });
            });
    }, [props,urlParams.singleAccidentCasesId]);


    const goBack = () => {
        navigate("/accidentCases");
    };

      const toggleHelpSidebar = () => {
    setHelpSidebarVisible(!isHelpSidebarVisible);
  };

  const copyPageLink = () => {
    const currentUrl = window.location.href;

    navigator.clipboard
      .writeText(currentUrl)
      .then(() => {
        props.alert({
          title: "Link Copied",
          type: "success",
          message: "Page link copied to clipboard!",
        });
      })
      .catch((err) => {
        console.error("Failed to copy link: ", err);
        props.alert({
          title: "Error",
          type: "error",
          message: "Failed to copy page link.",
        });
      });
  };

    const menuItems = [
        {
            label: "Copy link",
            icon: "pi pi-copy",
            command: () => copyPageLink(),
        },
        {
            label: "Help",
            icon: "pi pi-question-circle",
            command: () => toggleHelpSidebar(),
        },
    ];

    return (
        <ProjectLayout>
        <div className="col-12 flex flex-column align-items-center">
            <div className="col-12">
                <div className="flex align-items-center justify-content-between">
                <div className="flex align-items-center">
                    <Button className="p-button-text" icon="pi pi-chevron-left" onClick={() => goBack()} />
                    <h3 className="m-0">Accident Cases</h3>
                    <SplitButton
                        model={menuItems.filter(
                        (m) => !(m.icon === "pi pi-trash" && items?.length === 0),
                        )}
                        dropdownIcon="pi pi-ellipsis-h"
                        buttonClassName="hidden"
                        menuButtonClassName="ml-1 p-button-text"
                    />
                </div>
                
                {/* <p>accidentCases/{urlParams.singleAccidentCasesId}</p> */}
            </div>
            <div className="card w-full">
                <div className="grid ">

            <div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Insurance Ref</label><p className="m-0 ml-3" >{_entity?.insuranceRef}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Case No</label><p className="m-0 ml-3" >{_entity?.caseNo}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Court</label><p className="m-0 ml-3" >{_entity?.court}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Plaintiff Solicitors</label><p className="m-0 ml-3" >{_entity?.plaintiffSolicitors}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Plaintiff</label><p className="m-0 ml-3" >{_entity?.plaintiff}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Insured Driver</label><p className="m-0 ml-3" >{_entity?.insuredDriver}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Insured</label><p className="m-0 ml-3" >{_entity?.insured}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Insured Vehicle</label><p className="m-0 ml-3" >{_entity?.insuredVehicle}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Collision Date Time</label><p id="collisionDateTime" className="m-0 ml-3" >{_entity?.collisionDateTime}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">ClaimStatus</label><p className="m-0 ml-3" >{_entity?.claimStatus}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Synonyms</label><p className="m-0 ml-3" >{_entity?.synonyms}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Parameters</label><p className="m-0 ml-3" >{_entity?.parameters}</p></div>
            <div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">User</label>
                    {user.map((elem) => (
                        <Link key={elem._id} to={`/users/${elem._id}`}>
                        <div>
                  {" "}
                            <p className="text-xl text-primary">{elem.name}</p>
                            </div>
                        </Link>
                    ))}</div>

                    <div className="col-12">&nbsp;</div>
                </div>
            </div>
        </div>
        <div className="mt-2">
            <TabView>
                
                    <TabPanel header="true" leftIcon="pi pi-building-columns mr-2">
                    <SectionContentsPage/>
                    </TabPanel>
                    

                    <TabPanel header="true" leftIcon="pi pi-building-columns mr-2">
                    <CaseDocumentsPage/>
                    </TabPanel>
                    

                    <TabPanel header="true" leftIcon="pi pi-building-columns mr-2">
                    <HistoriesPage/>
                    </TabPanel>
                    

                    <TabPanel header="true" leftIcon="pi pi-building-columns mr-2">
                    <TextExtractionQueuesPage/>
                    </TabPanel>
                    

                    <TabPanel header="true" leftIcon="pi pi-building-columns mr-2">
                    <GroundTruthQueuesPage/>
                    </TabPanel>
                    
            </TabView>
        </div>

      <CommentsSection
        recordId={urlParams.singleAccidentCasesId}
        user={props.user}
        alert={props.alert}
        serviceName="accidentCases"
      />
      <div
        id="rightsidebar"
        className={classNames("overlay-auto z-1 surface-overlay shadow-2 absolute right-0 w-20rem animation-duration-150 animation-ease-in-out", { "hidden" : !isHelpSidebarVisible })}
        style={{ top: "60px", height: "calc(100% - 60px)" }}
      >
        <div className="flex flex-column h-full p-4">
          <span className="text-xl font-medium text-900 mb-3">Help bar</span>
          <div className="border-2 border-dashed surface-border border-round surface-section flex-auto"></div>
        </div>
      </div>
      </div>
        </ProjectLayout>
    );
};

const mapState = (state) => {
    const { user, isLoggedIn } = state.auth;
    return { user, isLoggedIn };
};

const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
});

export default connect(mapState, mapDispatch)(SingleAccidentCasesPage);
