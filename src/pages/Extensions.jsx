// Components;
import Header from '@components/Header';
import ExtensionBox from '@components/ExtensionBox';

// Data;
import { extensionslist } from '@/data/ExtensionsList';

export default function Extensions() {

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
            {extensionslist.map((ext) => (
              <ExtensionBox key={ext.name} extension={ext} />
            ))}
          </section>
        </main>
      </section>
    </div>
  );
}
