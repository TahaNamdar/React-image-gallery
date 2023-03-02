import MapImage from '../images/watsons_bay/Watsons-Bay_Map.jpg'
import Gangway from '../images/watsons_bay/WB_Benefits_Covered-gangway.jpg'
import Pontoon from '../images/watsons_bay/WB_Benefits_Hydraulic-pontoon.jpg'

import View1_Before from '../images/watsons_bay/WatsonsBay_View1_Before.jpg'
import View2_Before from '../images/watsons_bay/WatsonsBay_View2_Before.jpg'
import View3_Before from '../images/watsons_bay/WatsonsBay_View3_Before.jpg'
import home_background from '../images/img/home_background.jpg'
import map_background from '../images/img/map_background.jpg'

import { IDataProvider } from '../models/models'

const data: IDataProvider = {
  title: 'Port Macquarie Breakwall Rock Art',
  wharf: 'Port Macquarie Breakwall Rock Art',
  wharfHeader: 'Project benefits',
  wharfDesc: 'Both concept design options would provide:',
  slug: 'Port Macquarie Breakwall Rock Art',
  imageHeight: 2200,
  info: 'Experience the vibrant trail of messages and tributes left behind by visitors and locals along the iconic breakwall’s rock art. Each painted rock has been digitally archived, ensuring that the memory endures. We warmly invite you to explore this lasting legacy.',
  homebgimage: home_background,
  backgroundImage: map_background,
  mapImage: MapImage,
  sliders: [],
  gallery: [
    {
      original: View1_Before,
      thumbnail:View1_Before,
      title: '',
      caption: '',
      x: 9,
      y: 45,
      options: [
        {
          img: View1_Before,
          name: '',
        },
        {
          img: View2_Before,
          name: '',
        },
        {
          img: View3_Before,
          name: '',
        },
      ],
    },
    {
      original: Gangway,
      thumbnail:Gangway,
      title: '',
      caption: '',
      x: 80,
      y: 71,
    },
    {
      original: Pontoon,
      thumbnail:Pontoon,
      title: '',
      caption: '',
      x: 83,
      y: 79,
    }, {
      original: Pontoon,
      thumbnail:Pontoon,
      title: '',
      caption: '',
      x: 83,
      y: 79,
    }, {
      original: Pontoon,
      thumbnail:Pontoon,
      title: '',
      caption: '',
      x: 83,
      y: 79,
    }, {
      original: Pontoon,
      thumbnail:Pontoon,
      title: '',
      caption: '',
      x: 30,
      y: 79,
    }
  ],
  faq: [
    {
      title: 'Is it necessary to upgrade the wharf?',
      body: 'As an operator of public transport under the Disability Discrimination Act 1992 (DDA), Transport for NSW is required to upgrade the public transport precincts to ensure equitable access is provided for all customers. <br /><br />Some public transport stations, wharves and stops do not currently meet the requirements of the federal Disability Standards for Accessible Public Transport 2002 (DSAPT). The Standards set out minimum accessibility requirements for public transport providers and ensure that people with a disability have equivalent access to public transport services. <br /><br />Upgrading public transport precincts will make the public transport network accessible to people with additional mobility requirements, parents/carers with prams and customers with luggage. For more information visit the <a href="https://www.transport.nsw.gov.au/projects/current-projects/tap-3#Sydney_Ferries_-_TAP_3_(2019-2023)">Transport Access Program</a>.',
    },
    {
      title: 'What is the Transport Access Program?',
      body: 'The Transport Access Program is an initiative to provide a better experience for public transport customers. Transport for NSW is in the process of improving wharves across Sydney. The aim is to upgrade these structures so that they are modern, safe and accessible. This program has most recently delivered upgraded wharves at North Sydney, Kissing Point and Woolwich. For more information visit the <a href="https://roads-waterways.transport.nsw.gov.au/maritime/projects/ferry-wharf-upgrade-program.html">Wharf Upgrade Program</a>.',
    },
    {
      title: 'Why is this upgrade being proposed?',
      body: 'Due to tidal steps at the wharf, customers with mobility needs are unable to use the ferry service without assistance. We want to ensure that everyone has equal access and that the wharf can be enjoyed by our customers for years to come.',
    },
    {
      title: 'What is a hydraulic platform? Why would it improve efficiency and safety at the wharf?',
      body: 'The proposed wharf design includes a new hydraulic platform. The platform can automatically adjust in height to improve the efficiency of berthing ferries. A hydraulic system is generally used at wharves where wave and wind conditions are stronger, allowing for safe and level passenger pick-up and drop-off. Dual platforms would allow for multiple vessels to use the wharf at once, reducing delays to passengers.',
    },
    {
      title: 'How will my feedback be used during the design process?',
      body: 'This project needs to balance a number of important requirements such as ferry operations, customer accessibility and comfort, and mitigating environmental and construction impacts. <br /><br />We have developed two concept design ideas for feedback. Both designs provide a functional, distinctive and iconic design theme that will unify and identify Sydney Harbour commuter wharves. Comments received during consultation will be considered in the selection of a preferred option to progress to the detailed design and environmental assessment stage.',
    },
    {
      title: 'Will there be another opportunity to give feedback?',
      body: 'The community will be able to provide further feedback at the Review of Environmental Factors stage where a report assessing environmental impacts will be placed on public display for comment.',
    },
    {
      title: 'When will construction take place?',
      body: 'The project is in the early stages of planning. The next stage will include the development of the design and display of the Review of Environmental Factors. Construction timeframes, including how the new wharf will be constructed, will depend on the outcomes from the Review of Environmental Factors.',
    },
    {
      title:
        'If option 1 (build new wharf next to existing wharf) was to proceed, would the existing wharf be maintained for recreational use?',
      body: 'If option one was to proceed, it is proposed that the existing wharf structure would be retained during construction to allow ferry service to continue, however the future of the structure is yet to be determined.',
    },
    {
      title: 'Will you shut the existing wharf when construction starts?',
      body: 'If concept design option 1 (build new wharf next to the existing wharf) was to proceed, ferry transport and recreational/commercial berthing would largely continue at the existing wharf during construction , however for safety reasons there may be short durations when ferry services may be affected, and berthing is unavailable. <br /><br />If concept design option 2 (replace existing wharf) was to proceed, the wharf would close during construction. Alternative transport would be investigated, and every effort would be made to minimise disruption to the community. More information and the opportunity to provide feedback about construction impacts will be provided as part of the Review of Environmental Factors process.',
    },
    {
      title: 'How long will construction take to complete?',
      body: 'For both options, construction would take around six to eight months based on previous upgrades.',
    },
    {
      title: 'Where can I find information on other wharf upgrades in my area?',
      body: 'Wharf interchanges across Sydney are being upgraded to improve the transport experience for customers and the community, including at <a href="https://roads-waterways.transport.nsw.gov.au/projects/double-bay-wharf-upgrade/index.html">Double Bay</a> and <a href="https://roads-waterways.transport.nsw.gov.au/projects/darling-point-wharf-upgrade/index.html">Darling Point</a>. <a href="https://roads-waterways.transport.nsw.gov.au/maritime/projects/ferry-wharf-upgrade-program.html">Find out more</a> about wharf upgrades in your area.',
    },
    {
      title: 'How can I contact the project team?',
      body: 'For further information about this project contact:<br /><a href="mailto:WharfUpgradeProgram@transport.nsw.gov.au.au">WharfUpgradeProgram@transport.nsw.gov.au</a> or call <a href="tel:1800770973">1800 770 973</a> (toll free) during business hours.',
    },
  ],
  about:
    'Watsons Bay Wharf provides an important ferry connection for visitors to the area and locals accessing the city. Due to tidal steps at the wharf, customers with mobility needs are unable to use the ferry service without assistance. We want to ensure that everyone has equal access and that the wharf can be enjoyed by our customers for years to come. \n\nWe are proposing to upgrade the wharf to make it accessible, safer, and more comfortable for customers. Two concept design ideas have been developed. Both designs provide a functional,  distinctive and iconic design theme that will unify and identify Sydney Harbour commuter wharves.',
  aboutPoints: [
    'Improved access for customers with assisted and unassisted mobility needs',
    'Improved access for customers with prams and luggage',
    'Improved protection from the wind, rain and sun',
    'Improved seating and waiting area capacity',
    'Improved safety for customers and staff',
    'More efficient ferry pick-up and drop-off',
    'Improved pedestrian access to the wharf.',
  ],
  have_your_say:
    'https://yoursay.transport.nsw.gov.au/watsons-bay-wharf-upgrade/survey_tools/watsons-bay-wharf-upgrade-have-your-say',
  feedbackDate: 'Friday 5 June 2020',
  surveyOpen: true,
}

export default data



