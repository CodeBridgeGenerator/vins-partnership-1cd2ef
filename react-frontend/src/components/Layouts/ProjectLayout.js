import AppSideBar from "./appSideBar/AppSideBar.js";

/*

import ProductsPage from "../ProductsPage/ProductsPage";
import AccidentCasesPage from "../AccidentCasesPage/AccidentCasesPage";
import SectionContentsPage from "../SectionContentsPage/SectionContentsPage";
import CaseDocumentsPage from "../CaseDocumentsPage/CaseDocumentsPage";
import HistoriesPage from "../HistoriesPage/HistoriesPage";
import TextExtractionQueuesPage from "../TextExtractionQueuesPage/TextExtractionQueuesPage";
import GroundTruthQueuesPage from "../GroundTruthQueuesPage/GroundTruthQueuesPage";
import PromptQueuesPage from "../PromptQueuesPage/PromptQueuesPage";
~cb-add-import~

~cb-add-services-card~

case "products":
                return <ProductsPage />;
case "accidentCases":
                return <AccidentCasesPage />;
case "sectionContents":
                return <SectionContentsPage />;
case "caseDocuments":
                return <CaseDocumentsPage />;
case "histories":
                return <HistoriesPage />;
case "textExtractionQueues":
                return <TextExtractionQueuesPage />;
case "groundTruthQueues":
                return <GroundTruthQueuesPage />;
case "promptQueues":
                return <PromptQueuesPage />;
~cb-add-thurthy~

*/

const AppLayout = (props) => {
  const { children, activeKey, activeDropdown } = props;

  return (
    <div className="flex min-h-[calc(100vh-5rem)] mt-20 bg-white">
      <AppSideBar activeKey={activeKey} activeDropdown={activeDropdown} />
      <div className="flex-1 ml-2">{children}</div>
    </div>
  );
};

export default AppLayout;
