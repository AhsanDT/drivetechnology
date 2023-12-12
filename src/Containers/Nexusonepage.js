import React from 'react'
import Peacemaker from './Peacemaker'
import { aboutProjectData, peacemakerData , problemStatementData , appStoreData ,footerData ,timeLineData ,styleGuideData} from "../Data/NexusData";
import AboutProject from './AboutProject'
import ProblemStatement from './ProblemStatement'
import Projecttimeline from './Projecttimeline'
import Styleguide from './Styleguide'
import AppStore from './AppStore'
import Footer from './Footer'

function Nexusonepage() {
  return (
    <>
         <Peacemaker data={peacemakerData} />
        <AboutProject data={aboutProjectData} />
         <ProblemStatement data={problemStatementData}/>  
         <Projecttimeline timeLine={timeLineData} />
         <Styleguide styGuideData={styleGuideData} />
          <AppStore data={appStoreData}/>
             <Footer footData={footerData} />      
    </>
  )
}

export default Nexusonepage