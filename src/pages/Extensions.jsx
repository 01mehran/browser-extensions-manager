// Components;
import Header from '@components/Header';
import ExtensionBox from '@components/ExtensionBox';

export default function Extensions() {
  // const extensionslist = [
  //   {
  //     logo: `${logodevlens}`,
  //     name: 'DevLens',
  //     description:
  //       'Quickly inspect page layouts and visualize element boundaries.',
  //     isActive: true,
  //   },
  //   {
  //     logo: '@images/logo-style-spy.svg',
  //     name: 'StyleSpy',
  //     description: 'Instantly analyze and copy CSS from any webpage element.',
  //     isActive: true,
  //   },
  //   {
  //     logo: '@images/logo-speed-boost.svg',
  //     name: 'SpeedBoost',
  //     description:
  //       'Optimizes browser resource usage to accelerate page loading.',
  //     isActive: false,
  //   },
  //   {
  //     logo: '@images/logo-json-wizard.svg',
  //     name: 'JSONWizard',
  //     description:
  //       'Formats, validates, and prettifies JSON responses in-browser.',
  //     isActive: true,
  //   },
  //   {
  //     logo: '@images/logo-tab-master-pro.svg',
  //     name: 'TabMaster Pro',
  //     description: 'Organizes browser tabs into groups and sessions.',
  //     isActive: true,
  //   },
  //   {
  //     logo: '@images/logo-viewport-buddy.svg',
  //     name: 'ViewportBuddy',
  //     description:
  //       'Simulates various screen resolutions directly within the browser.',
  //     isActive: false,
  //   },
  //   {
  //     logo: '@images/logo-markup-notes.svg',
  //     name: 'Markup Notes',
  //     description:
  //       'Enables annotation and notes directly onto webpages for collaborative debugging.',
  //     isActive: true,
  //   },
  //   {
  //     logo: '@images/logo-grid-guides.svg',
  //     name: 'GridGuides',
  //     description:
  //       'Overlay customizable grids and alignment guides on any webpage.',
  //     isActive: false,
  //   },
  //   {
  //     logo: '@images/logo-palette-picker.svg',
  //     name: 'Palette Picker',
  //     description: 'Instantly extracts color palettes from any webpage.',
  //     isActive: true,
  //   },
  //   {
  //     logo: '@images/logo-link-checker.svg',
  //     name: 'LinkChecker',
  //     description: 'Scans and highlights broken links on any page.',
  //     isActive: true,
  //   },
  //   {
  //     logo: '@images/logo-dom-snapshot.svg',
  //     name: 'DOM Snapshot',
  //     description: 'Capture and export DOM structures quickly.',
  //     isActive: false,
  //   },
  //   {
  //     logo: '@images/logo-console-plus.svg',
  //     name: 'ConsolePlus',
  //     description:
  //       'Enhanced developer console with advanced filtering and logging.',
  //     isActive: true,
  //   },
  // ];
  return (
    <div className="min-h-dvh bg-linear-[180deg,#ebf2fc_0%,#eef8f9_100%] px-2 pt-3 md:pt-4 dark:bg-linear-[180deg,#040918_0%,#091540_100%]">
      <section className="mx-auto lg:max-w-6xl xl:max-w-6xl">
        {/* Header */}
        <Header />
        <main className="mt-8">
          {/* Tabs */}
          <section className="flex flex-col items-center justify-center space-y-4 md:flex-row md:justify-between md:space-y-0">
            <article>
              <h2 className="text-primary-dark-800 dark:text-primary-light-200 text-xl font-bold">
                Extensions List
              </h2>
            </article>
            <article className="flex items-center space-x-3">
              <button className={`tabs active-tab`}>All</button>
              <button className={`tabs`}>Active</button>
              <button className={`tabs`}>Inactive</button>
            </article>
          </section>

          {/* Extessions List */}
          <section className="mt-8 grid grid-cols-1 gap-4 px-1 pb-4 sm:grid-cols-2 lg:grid-cols-3">
            <ExtensionBox />
          </section>
        </main>
      </section>
    </div>
  );
}
