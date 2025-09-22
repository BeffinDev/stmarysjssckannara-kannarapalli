import React from 'react'
import LandingPageNavbar from '../../navbar/LandingPageNavbar'
import HomePageBreadcrumb from '../breadcrumb/HomePageBreadcrumb'
import LandingPageFooter from '../../footer/LandingPageFooter';

// Component for rendering a single table row
const TableRow = ({ date, description }) => {
  return (
    <tr className='flex flex-col md:flex-row'>
      <td className="p-4 font-bold text-black w-60">{date}</td>
      <td className="p-4">{description}</td>
    </tr>
  );
};

// Component for rendering the section with a title and table
const SectionWithTable = ({ title, subtitle, data }) => {
  return (
    <div>
      <div className="my-5">
        <h1 className="text-xl md:text-4xl font-extrabold">{title}</h1>
        <h1 className="ml-2 mt-2">{subtitle}</h1>
      </div>
      <table border="1" className="table-auto border-spacing-2">
        <tbody>
          {data.map((row, index) => (
            <TableRow key={index} date={row.date} description={row.description} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const TitleWithContent = ({ title, content }) => {
  return (
    <div>
      <h1 className='mt-3 font-bold'>
        {title}
      </h1>
      <p>
        {content}
      </p>
    </div>
  )
}


function About() {

  const prayerSchedule = [
    {
      date: 'ഞായറാഴ്ച',
      description: (
        <>
          <div>പ്രഭാത പ്രാർത്ഥന - 7.15 am.</div>
          <div>വി. കുർബ്ബാന - 8.15 am.</div>
        </>
      ),
    },
    {
      date: 'ഇട ദിവസങ്ങളിൽ',
      description: (
        <>
          <div>പ്രഭാത പ്രാർത്ഥന - 7 am.</div>
          <div>വി. കുർബ്ബാന - 7.30 am.</div>
        </>
      ),
    },
  ];

  const majorFestivals = [
    {
      date: 'ജനുവരി 14, 15',
      description: 'വി. ദൈവമാതാവിന്റെ ഓർമ്മപ്പെരുന്നാൾ - ചീനിക്കടവ് കുരിശും തൊട്ടി',
    },
    {
      date: 'ഫെബ്രുവരി 4, 5',
      description: 'പരി. മോറോൻ മോർ ഇഗ്നാത്തിയോസ് ഏല്യാസ് ത്രിതിയൻ ബാവ തിരുമനസ്സിന്റെ ഓർമ്മപ്പെരുന്നാളും തീർത്ഥയാത്രയും - കരടിയ കുരിശും തൊട്ടി',
    },
    {
      date: 'May 4, 5, 6, 7',
      description: 'പരി. ഗീവർഗ്ഗീസ് സഹദായുടെ ഓർമ്മപ്പെരുന്നാൾ',
    },
    {
      date: '4, 5',
      description: 'മഞ്ഞകുന്ന് കുരിശും തൊട്ടിയിൽ',
    },
    {
      date: '5, 6',
      description: 'മാരായ്ക്കൽ കുരിശും തൊട്ടിയിൽ',
    },
    {
      date: '6, 7',
      description: 'പള്ളിയിൽ',
    },
    {
      date: 'സെപ്റ്റംബർ 1 - 8',
      description: (
        <>
          <div>എട്ടുനോമ്പ് പെരുന്നാൾ</div>
          <div>7-ാം തിയ്യതി വൈകീട്ട് നടതുറക്കൽ, സുനോറോ വണക്കം</div>
          <div>8-ാം തിയ്യതി വി. ദൈവമാതാവിന്റെ ജനനപെരുന്നാൾ</div>
        </>
      ),
    },
    {
      date: 'ഒക്ടോബർ 1, 2',
      description: 'പരിശുദ്ധനായ എൽദോ മോർ ബസേലിയോസ് ബാവയുടെ ഓർമ്മ പെരുന്നാൾ - കൊല്ലൻമുക്ക് കുരിശും തൊട്ടി',
    },
    {
      date: 'നവംബർ 1,2',
      description: 'പരിശുദ്ധനായ ചാത്തുരുത്തിയിൽ കൊച്ചു തിരുമേനിയുടെ ഓർമ്മ പെരുന്നാളും ദേവാലയ ശിലാ സ്ഥാപനംദിനവും.',
    },
    {
      date: '',
      description: 'എല്ലാ മാസം രണ്ടാം ഞായറാഴ്ച വി. ദൈവമാതാവിന്റെ വി. സുനോറോ പെരുന്നാൾ',
    },
    {
      date: '',
      description: 'എല്ലാ മാസം നാലാം ഞായറാഴ്ച  വിശുദ്ധ ഏലിയാസ് തൃതീയൻ ബാവായുടെ തിരുശേഷിപ്പ് പെരുന്നാൾ',
    },
  ];

  const sections = [
    {
      text: "St. Mary's Cathedral is renowned for its historic significance and breathtaking architecture. Located in the heart of the city, it has been a spiritual haven for millions of devotees over the years.",
      image: "https://via.placeholder.com/800x400",
      alt: "Church Exterior",
    },
    {
      text: "The church was established in 1925 and is one of the oldest landmarks in the region. It features stunning Gothic-style architecture and a serene interior, providing a perfect space for reflection and worship.",
      image: "https://via.placeholder.com/800x400",
      alt: "Church Interior",
    },
    {
      text: "Over the years, the church has hosted countless events and ceremonies that hold great significance to the community. It remains a symbol of faith, hope, and unity.",
      image: "https://via.placeholder.com/800x400",
      alt: "Church Grounds",
    },
    {
      text: "We welcome everyone to visit St. Mary's Cathedral and experience its timeless beauty and tranquility. Join us in celebrating the history and spirit of this cherished landmark.",
    },
  ];

  return (
    <div>
      <LandingPageNavbar />

      {/* <div className="container-fluid bg-breadcrumb bg-opacity-50"
        style={{
          backgroundImage: 'url("https://content.jdmagicbox.com/comp/thrissur/g7/9999px487.x487.171203022651.t2g7/catalogue/st-mary-s-jacobite-syrian-orthodox-church-kannara-thrissur-churches-1hglq9faki.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container text-center py-5" style={{ maxWidth: '900px' }}>
          <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">
            About Us
          </h4>
          <ol className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Pages</a>
            </li>
            <li className="breadcrumb-item active text-primary">About</li>
          </ol>
        </div>
      </div> */}
      <HomePageBreadcrumb title={"About Us"} page={"About"} />
      {/* <div className='mx-20 mb-16'> */}
      <div className="bg-gray-100 py-8 px-4">
        <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-6">
            <h1 className='my-5 text-xl md:text-4xl font-extrabold'>ഇടവകയുടെ
              ചരിത്രത്താളുകളിലൂടെ
            </h1>
            {/* <img
              src="https://via.placeholder.com/800x400"
              // alt={section.alt || `Section ${index + 1}`}
              className="rounded-lg mb-4"
            /> */}
            <p className='text-gray-600'>
              മദ്ധ്യതിരുവിതാംകൂറിൽ നിന്നും സ്വാതന്ത്ര്യലബ്ദിക്ക് മുമ്പ് മുതൽ ദൈനം
              ദിനജീവിതരോഗങ്ങൾക്ക് വേണ്ടി യാക്കോബായ സഭയിലെ അനേകം വിശ്വാസി
              കൾ തൃശൂർ ജില്ലയിലെ കിഴക്കൻ മലയോര പ്രദേശമായ കണ്ണാറ, പിച്ചി, മാരാ
              യ്ക്കൽ, മഞ്ഞകുന്ന് തുടങ്ങിയ ഭാഗങ്ങളിൽ കുടിയേറി പാർത്തു. എന്നാൽ അവ
              രുടെ ആത്മീയ ആവശ്യങ്ങൾക്ക് ഈ ഭാഗത്ത് ആരാധനാലയങ്ങൾ ഉണ്ടായിരുന്നി
              ല്ല. ആ കാലഘട്ടങ്ങളിൽ കരിപ്പകുന്ന് മോർ ബസേലിയോസ് പള്ളിയാണ് ആളു
              കൾ അവരുടെ ആത്മീയ ആവശ്യങ്ങൾക്കായി ആശ്രയിച്ചിരുന്നത്. ഒരു ദേവാലയം
              പണിതീർക്കണം എന്നാഗ്രഹിക്കുകയും അതിനുവേണ്ടി ആലോചിച്ച് പീച്ചി മയിലാട്ടും പാറയിൽ ഒരു
              സ്ഥലം വാങ്ങുകയും അതിന് അന്നത്തെ കൊച്ചി ഭദ്രാസന മെത്രാപ്പോലീത്തയായിരുന്ന അഭിവന്ദ
              പൗലോസ് മോർ സേവേറിയോസ് തിരുമനസ്സ് അനുമതി നൽകുകയും ചെയ്തു. 1955ൽ ദേവാലയം
              പണിതീർത്ത് വികാരിയായിരുന്ന റവ. ഫാ. ജോർജ്ജ് കുരുവേലിയുടെ നേതൃത്വത്തിൽ വി. ബലി
              അർപ്പിച്ചുപോന്നു.
              പിന്നീട് യാത്രാ ബുദ്ധിമുട്ടുകളെ തുടർന്ന് കരടിയള ദേശത്ത് ഫാ. ഏലിയാസ് അച്ചാട്ടിന്റെ നേത
              ത്വത്തിൽ വി. ബലി അർപ്പിച്ചു പോരുകയുണ്ടായി. എന്നാൽ മറ്റുഭാഗങ്ങളിലെ ആളുകളുടെ സൗക
              രത്തെ പ്രതി 1961- ൽ കണ്ണാറയിൽ ദേവാലയം സ്ഥാപിതമാവുകയും കുരുവേലിൽ ജോർജ്ജ് അച്ചൻ
              വി. ബലി അർപ്പിച്ചു പോരുകയും ചെയ്തിരുന്നു.
              ആ വർഷം തന്നെ ഫാ. ജോൺ ഇടയക്കാട്ടിൽ പള്ളിവികാരിയായി വരുകയും പള്ളിയുടെ പണി
              കൾ പൂർത്തിയാക്കുകയും പ്രവർത്തനങ്ങൾക്ക് നേതൃത്വം നൽക്കുകയും ചെയ്തു.
              1972-ൽ തോമ്മാശ്ലീഹായുടെ സിംഹാസനത്തെ ചൊല്ലി സഭാ വിശ്വാസികളുടെ ഇടയിൽ
              തർക്കം ആരംഭിക്കുകയും. തന്റെ ഫലമായി പള്ളി ആർ.ഡി.ഒ. നിയന്ത്രണത്തിൽ വരികയും ചെയ്തു.
              വി. പത്രോസീഹായുടെ സിംഹാസനത്തോട് കൂറുള്ള പള്ളിയിലെ ബഹുഭൂരിപക്ഷം വിശ്വാസികളും
              ചേർന്ന് റവ. ഫാ. ജോൺ ഇടയക്കാട്ടിലിന്റെ നേതൃത്വത്തിൽ പരിശുദ്ധനായ ചാത്തുരുത്തിൽ മോർ
              ഗ്രിഗോറിയോസ് തിരുമേനിയുടെ കുരിശുംതൊട്ടിയിൽ വി. ബലി അർപ്പിച്ചു.
              തുടർന്ന് അന്ത്യോഖ്യാ വിശ്വാസികൾ കൂടിയാലോചിക്കുകയും സ്ഥിരമായി ആരാധനയ്ക്ക്
              വേണ്ടി കരടിയ പ്രദേശത്ത് പെമ്പിളികുന്നേൽ കുഞ്ഞുകുട്ടിയുടെ കയ്യിൽനിന്ന് ഇപ്പോൾ പള്ളിയിരി
              ക്കുന്ന സ്ഥലം വാങ്ങുവാൻ തീരുമാനിച്ചു. ടി. സ്ഥലത്തിന് ദ്രവ്യമായ 1500/- രൂപ നൽകി പിന്നീട്
              അതിൽ വി. ദൈവമാതാവിന്റെ നാമത്തിൽ ഒരു ചാപ്പൽ സ്ഥാപിക്കുകയും 1974 നവംബർ 1,2 തിയ്യതിക
              ളിൽ സഭയിലെ അന്നത്തെ ഇടവക മെത്രാപ്പോലീത്തയായിരുന്ന കാലം ചെയ്ത അഭിവന്ദ്യ പെരുമ്പിള്ളി
              യിൽ ഗീവർഗീസ് മോർ ഗ്രിഗോറിയോസ് മെത്രാപ്പോലീത്ത വി. ബലി അർപ്പിച്ച് നമ്മെ അനുഗ്രഹിച്ചു.
              തുടർന്ന് അഭിവന്ദ്യ ഇടവക മെത്രാപ്പോലീത്താ തിരുമനസ്സിന്റെയും വികാരി റവ. ഫാ. ജോൺ ഇട
              യക്കാട്ടിലിന്റെയും നേതൃത്വത്തിൽ ഇടവക അനുദിനം വളർന്നുവന്നു. മാതൃദേവാലയത്തെ പ്രതി നട
              ത്തിവന്ന കേസുകൾ 1986ൽ ഹൈക്കോടതിയിൽ വെച്ച് ഒത്തു തീർപ്പാവുകയും തുടർന്ന് ഇരുവിഭാഗ
              ങ്ങളും ചർച്ച നടത്തുകയും 1 ലക്ഷം രൂപയും സെമിത്തേരിയ്ക്കുള്ള സ്ഥലവും, കരടിയള കുരിശുതൊ
              ട്ടിയും വാങ്ങി യാക്കോബായ വിഭാഗം മാതൃ ദേവാലത്തിൽ നിന്ന് പിരിഞ്ഞു.
              തുടർന്ന് 1989 നവംബർ മാസം 2-ാം തിയ്യതി പരി. ദൈവമാതാവിന്റെ നാമത്തിലുള്ള ഇപ്പോ
              ഴത്തെ ദേവാലയത്തിന് അന്നത്തെ ഇടവക മെത്രാപ്പോലിത്തായും ഇന്നത്തെ കാതോലിക്കായുമായ
              അഭിവന്ദ്യ ബസേലിയോസ് തോമസ് പ്രഥമൻ ബാവ തറക്കല്ലിട്ടു. അന്നത്തെ വികാരി ഫാ. അബ്രഹാം
              ചാത്തോത്തിന്റെ നേതൃത്വത്തിൽ പള്ളി പണി ആരംഭിക്കുകയും, ആഴാന്ത മാത്യു എബ്രഹാം കശീശാ
              യുടെ നേതൃത്വത്തിൽ പണി പൂർത്തീകരിക്കുകയും 1991 ഏപ്രിൽ 9-ാം തിയ്യതി കാലം ചെയ്ത അഭി
              വന്ദ്യ ഗീവർഗ്ഗീസ് മോർ ഗ്രിഗോറിയോസ് മെത്രാപ്പോലിത്തയുടെയും ഇപ്പോഴത്തെ കാതോലിക്കാ ബാവ
              ബസേലിയോസ് തോമസ് പ്രഥമന്റെയും പ്രഥമ കാർമ്മികത്വത്തിൽ പള്ളി മുറോൻ കൂദാശ നടത്തപ്പെട്ടു.
              തുടർന്ന് റവ. ഫാ. എൽദ്ദോപോൾ ചേറാടി, റവ. ഫാ. മാത്യൂസ് നടുവിലേക്ക് റവ. ഫാ. എൽദോസ്
              ആലുക്ക എന്നിവരുടെ നേതൃത്വത്തിൽ പള്ളി പുരോഗതിയിലേക്ക് വന്നു കൊണ്ടിരുന്നു. 1999 - 2000
              പള്ളിയുടെ സിൽവർ ജൂബിലി വളരെ ഭംഗിയായി ആഘോഷിച്ചു. വി. കുർബ്ബാന ഏറ്റുകഴിക്കൽ രീതി
              ഇവിടെ കൊണ്ടുവന്ന ഫാ. എൽദോസ് ആലുക്കായെ ഓർക്കുന്നു. 2003ൽ ഈ ഇടവകയിൽ ആദ്യമായി
              യൂണിറ്റുകൾ ആരംഭിച്ചതും ബഹുമാനപ്പെട്ട അച്ചനാണ് മാർച്ചിൽ അതിന്റെ ആദ്യ വാർഷികം നടത്തുക
              യുണ്ടായി.
              2005ൽ മലങ്കരയിലെ സുവിശേഷഘോഷ ശബ്ദം എന്നറിയപ്പെടുന്ന റവ. ഫാ. ജിജു വർഗ്ഗീസ്
              തണ്ണിക്കോട്ടിൽ വികാരിയായി വരുകയും ഈ പള്ളിയിൽ വി. ദൈവമാതാവിന്റെ വി. സുനോറോ സ്ഥാപി
              ക്കുവാൻ ശ്രമിക്കുകയും എന്നാൽ നടക്കാതെ പോകുകയും ചെയ്തു. പിന്നീട് വന്ന റവ.ഫാ. ഏലാസ്
              അരിയ്ക്കൽ ടി. കാര്യത്തിൽ ശ്രദ്ധ ചെലുത്തിയെങ്കിലും നടക്കുകയുണ്ടായില്ല. ആകാലയളവിൽ പള്ളി
              യിൽ മനോഹരമായ പാരിഷ് ഹാൾ പണി പൂർത്തിയാക്കി ഇപ്പോഴത്തെ കാതോലിക്ക ബാവാ തിരുമന
              സ്സുകൊണ്ട് ആശീർവദിക്കുകയുണ്ടായി പള്ളിയിൽ കടന്നുവരുന്ന രോഗികളെയും നിരാലംബരേയും
              അച്ചൻ പ്രത്യേകിച്ച് കരുതിയിരുന്നു. അതിനായി അച്ചൻ ഒരു ചാരിറ്റബിൾ ട്രസ്റ്റിന് രൂപം നല്കി. മോർ
              ഒസ്താനിയോസ് ചാരിറ്റബിൾ ഫണ്ട്, ഇന്ന് ഈ ഫണ്ടിൽ നിന്ന് 7 ഭവനങ്ങൾ പണിതു നല്കുവാനും നൂറു
              കണക്കിന് ആളുകൾക്ക് സഹായം നൽകുവാനും കഴിഞ്ഞു.
              തുടർന്ന് 2010 ൽ റവ. ഫാ. എൽദോ പ്രളയകാട്ടിൽ പള്ളിയിൽ വികാരിയായി എത്തുകയും
              അദ്ദേഹത്തിന്റെ പരിശ്രമ ഫലമായി അന്നത്തെ ഇടവക മെത്രാപ്പോലിത്തയായിരുന്ന അഭിവന്ദ്യ
              കുരിയാക്കോസ് മോർ യൗസേബിയോസ് തിരുമനസ്സ് വി. ദൈവമാതാവിന്റെ വി. സുനോറോ (ഇടക്കെട്ട്)
              2011 സെപ്റ്റംബർ മാസം 7-ാം തിയ്യതി പള്ളിയിൽ സ്ഥാപിച്ചു. ഇന്നും അനേകം പേർ അനുഗ്രഹം
              പ്രാപിച്ചു കടന്നു പോകുന്നു. ടി. കാലയളവിൽ കണ്ണാറയിൽ ദൈവമാതാവിന്റെ നാമത്തിലുള്ള കുരി
              ശുംതൊട്ടി, കരടിയളയിൽ പരിശുദ്ധനായ മോറോൻ മോർ ഇഗ്നാത്തിയോസ് ഏല്യാസ് ത്രിതീയൻ ബാവ
              യുടെ നാമത്തിലുള്ള കുരിശും തൊട്ടി സ്ഥാപിച്ചു. പള്ളിയിൽ കൽക്കുരിശു സ്ഥാപിച്ചതും, കൊടിമരം
              കൂദാശ ചെയ്തതും ഈ കാലഘട്ടത്തിലാണ്.
              2013ൽ ഇപ്പോഴത്തെ വികാരി ഫാ. ബേസിൽ റോയ് ഏറാടികുന്നേൽ സ്ഥാനമേൽക്കുകയും
              തുടർന്ന് ഇടവകയുടെ പ്രവർത്തനങ്ങൾക്ക് നേതൃത്വം നൽകി വരുന്നു.
              2014ൽ ദൈവമാതാവിന്റെ നാമത്തിൽ ചീനിക്കടവ് ദേശത്ത് ഒരു കുരിശും തൊട്ടിയും പരിശുദ്ധ
              നായ എൽദോ മോർ ബസേലിയോസ് ബാവയുടെ നാമത്തിൽ കൊല്ലൻമുക്ക് ദേശത്ത് ഒരു കുരിശും
              തൊട്ടിയും സ്ഥാപിക്കുകയുണ്ടായി.
              ഉറങ്ങുന്ന സത്യങ്ങളാണ് ചരിത്രങ്ങൾ അവയെ ഉണർത്തി കടലാസിലേക്ക് പകർത്തുമ്പോൾ
              പലതും വിസ്മരിക്കപ്പെട്ടേക്കാം. സമ്പൂർണ്ണവും സമഗ്രവുമായ ചരിത്രത്തെ സാംശീകരിക്കാനാണ്
              ഞങ്ങൾ ശ്രമിച്ചതെങ്കിലും ചെറിയ പിഴവുകൾ വന്നിട്ടുണ്ടാകാം അവ ബോധപൂർവ്വമല്ലെന്നും പിഴവു
              കൾ സദയം പൊറുക്കണമെന്നും അഭ്യർത്ഥിച്ചുകൊണ്ട്...


            </p>

            {/* <div className="bg-gray-100 py-8 px-4">
              <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">About the Church</h2>
                  {sections.map((section, index) => (
                    <div key={index} className="mb-6">
                      {section.image && (
                        <img
                          src={section.image}
                          alt={section.alt || `Section ${index + 1}`}
                          className="rounded-lg mb-4"
                        />
                      )}
                      <p className="text-gray-600">{section.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div> */}

            {/* <div>
          <div className='my-5 '>
            <h1 className=' text-4xl font-extrabold'>
              ആരാധന സമയങ്ങൾ
            </h1>
            <h1 className='ml-2 mt-2'>(Prayer and Holy Qurbana Schedule)</h1>
          </div>
          <table border="1">
            <tbody>
              <tr  >
                <td style={{ padding: '10px', fontWeight: "bold", color: "black" }}>ഞായറാഴ്ച</td>
                <td style={{ padding: '10px' }}>
                  <div>പ്രഭാത പ്രാർത്ഥന - 7 am.</div>
                  <div>വി. കുർബ്ബാന - 8.30 am.</div>
                </td>
              </tr>
              <tr>
                <td style={{ padding: '10px', fontWeight: "bold", color: "black" }}>ഇട ദിവസങ്ങളിൽ</td>
                <td style={{ padding: '10px' }}>
                  <div>പ്രഭാത പ്രാർത്ഥന - 7 am.</div>
                  <div>വി. കുർബ്ബാന - 7.30 am.</div>
                </td>
              </tr>
            </tbody>
          </table>
          <div >

            <h1 className='mt-3 font-bold'>
              മാസത്തിന്റെ എല്ലാ ആദ്യ വെള്ളിയാഴ്ചയും
            </h1>
            <p>
              വി. ദൈവമാതാവിനോടുള്ള മദ്ധ്യസ്ഥ പ്രാർത്ഥന വൈകീട്ട് 5.30 pm.ന്
            </p>
            <h1 className='mt-3 font-bold'>
              എല്ലാ ശനിയാഴ്ചകളിലും
            </h1>
            <p>
              താഴത്തെ പരുമലതിരുമേനിയുടെ കുരിശുംതൊട്ടിയിൽ വൈകീട്ട് 5.15ന് സന്ധ്യ പ്രാർത്ഥന
            </p>
          </div>
        </div> */}



            {/* <div>
          <div className='my-5 '>
            <h1 className=' text-4xl font-extrabold'>
              പളളിയിലെ പ്രധാനപെരുന്നാളുകൾ
            </h1>
            <h1 className='ml-2 mt-2'>(Major festivals of the church)</h1>
          </div>
          <table border="1" style={{ borderSpacing: '10px' }}>
            <tbody>
              <tr>
                <td style={{ padding: '10px', fontWeight: "bold", color: "black" }}>ജനുവരി 14, 15</td>
                <td style={{ padding: '10px' }}>വി. ദൈവമാതാവിന്റെ ഓർമ്മപ്പെരുന്നാൾ - ചീനിക്കടവ് കുരിശും തൊട്ടി</td>
              </tr>
              <tr>
                <td style={{ padding: '10px', fontWeight: "bold", color: "black" }}>ഫെബ്രുവരി 4, 5</td>
                <td style={{ padding: '10px' }}>
                  <div>പരി. മോറോൻ മോർ ഇഗ്നാത്തിയോസ് ഏല്യാസ് ത്രിതിയൻ ബാവ തിരുമനസ്സിന്റെ ഓർമ്മപ്പെരുന്നാളും തീർത്ഥയാത്രയും   - കരടിയ കുരിശും തൊട്ടി</div>
                </td>
              </tr>
              <tr>
                <td style={{ padding: '10px', fontWeight: "bold", color: "black" }}>May 4, 5, 6, 7</td>
                <td style={{ padding: '10px' }}>പരി. ഗീവർഗ്ഗീസ് സഹദായുടെ ഓർമ്മപ്പെരുന്നാൾ</td>
              </tr>
              <tr>
                <td style={{ padding: '10px', fontWeight: "bold", color: "black" }}>4, 5</td>
                <td style={{ padding: '10px' }}>മഞ്ഞകുന്ന് കുരിശും തൊട്ടിയിൽ</td>
              </tr>
              <tr>
                <td style={{ padding: '10px', fontWeight: "bold", color: "black" }}>5, 6</td>
                <td style={{ padding: '10px' }}>മാരായ്ക്കൽ കുരിശും തൊട്ടിയിൽ</td>
              </tr>
              <tr>
                <td style={{ padding: '10px', fontWeight: "bold", color: "black" }}>6, 7</td>
                <td style={{ padding: '10px' }}> പള്ളിയിൽ</td>
              </tr>
              <tr>
                <td style={{ padding: '10px', fontWeight: "bold", color: "black" }}>സെപ്റ്റംബർ 1 - 8</td>
                <td style={{ padding: '10px' }}> 
                  <div>എട്ടുനോമ്പ് പെരുന്നാൾ</div>
                  <div>7-ാം തിയ്യതി വൈകീട്ട് നടതുറക്കൽ, സുനോറോ വണക്കം</div>
                  <div>8-ാം തിയ്യതി വി. ദൈവമാതാവിന്റെ ജനനപെരുന്നാൾ</div>
                </td>
              </tr>
              <tr>
                <td style={{ padding: '10px', fontWeight: "bold", color: "black" }}>ഒക്ടോബർ 1, 2</td>
                <td style={{ padding: '10px' }}>പരിശുദ്ധനായ എൽദോ മോർ ബസേലിയോസ് ബാവയുടെ ഓർമ്മ പെരുന്നാൾ - കൊല്ലൻമുക്ക് കുരിശും തൊട്ടി</td>
              </tr>
              <tr>
                <td style={{ padding: '10px', fontWeight: "bold", color: "black" }}>നവംബർ 12</td>
                <td style={{ padding: '10px' }}>പരിശുദ്ധനായ ചാത്തുരുത്തിയിൽ കൊച്ചു തിരുമേനിയുടെ ഓർമ്മ പെരുന്നാളും ദേവാലയ ശിലാ സ്ഥാപനദിനവും.</td>

              </tr>

              <tr>
                <td></td>
                <td style={{ padding: '10px' }}>എല്ലാ മാസം രണ്ടാം ഞായറാഴ്ച വി. ദൈവമാതാവിന്റെ വി. സുനോറോ പെരുന്നാൾ</td>
              </tr>
            </tbody>
          </table>
        </div> */}


            <div>
              <div className="my-5">
                <h1 className="text-xl md:text-4xl font-extrabold">ആരാധന സമയങ്ങൾ</h1>
                <h1 className="ml-2 mt-2">(Prayer and Holy Qurbana Schedule)</h1>
              </div>
              <table border="1" className="table-auto border-spacing-2">
                <tbody>
                  {prayerSchedule.map((row, index) => (
                    <TableRow key={index} date={row.date} description={row.description} />
                  ))}
                </tbody>
              </table>

              <TitleWithContent
                title="മാസത്തിന്റെ എല്ലാ ആദ്യ വെള്ളിയാഴ്ചയും"
                content="വി. ദൈവമാതാവിനോടുള്ള മദ്ധ്യസ്ഥ പ്രാർത്ഥന വൈകീട്ട് 5.30 pm.ന്"

              />

              <TitleWithContent
                title="എല്ലാ ശനിയാഴ്ചകളിലും"
                content="താഴത്തെ പരുമലതിരുമേനിയുടെ കുരിശുംതൊട്ടിൽ വൈകീട്ട് 5.30ന് സന്ധ്യ പ്രാർത്ഥന"

              />

              <SectionWithTable
                title="പളളിയിലെ പ്രധാനപെരുന്നാളുകൾ"
                subtitle="(Major festivals of the church)"
                data={majorFestivals}
              />
            </div>


          </div>
        </div>
      </div>
      <LandingPageFooter />
    </div>
  )
}

export default About