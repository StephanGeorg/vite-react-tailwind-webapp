import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <img className="h-9" src="https://www.distance.to/public/apple-touch-icon.png" alt="Distance Tools" />
            <p className="text-balance text-sm/6 text-gray-300">I'm here to provide seamless solutions for developers, individuals and computers to help answer a simple question: How far is it?</p>
            <div className="flex gap-x-6">
              <a href="https://github.com/StephanGeorg" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">GitHub</span>
                <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://bsky.app/profile/stephangeorg.bsky.social" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">Bluesky</span>
                <svg className="size-6" fill="currentColor" viewBox="0 0 600 530" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="m135.72 44.03c66.496 49.921 138.02 151.14 164.28 205.46 26.262-54.316 97.782-155.54 164.28-205.46 47.98-36.021 125.72-63.892 125.72 24.795 0 17.712-10.155 148.79-16.111 170.07-20.703 73.984-96.144 92.854-163.25 81.433 117.3 19.964 147.14 86.092 82.697 152.22-122.39 125.59-175.91-31.511-189.63-71.766-2.514-7.3797-3.6904-10.832-3.7077-7.8964-0.0174-2.9357-1.1937 0.51669-3.7077 7.8964-13.714 40.255-67.233 197.36-189.63 71.766-64.444-66.128-34.605-132.26 82.697-152.22-67.108 11.421-142.55-7.4491-163.25-81.433-5.9562-21.282-16.111-152.36-16.111-170.07 0-88.687 77.742-60.816 125.72-24.795z" fill="#1185fe"/>
                </svg>              
              </a>
              <a href="https://www.linkedin.com/in/stephangeorg/" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">Linkedin</span>
                <svg className="size-6" fill="currentColor" viewBox="0 0 72 72" aria-hidden="true">
                  <path fillRule="evenodd" d="M8,72 L64,72 C68.418278,72 72,68.418278 72,64 L72,8 C72,3.581722 68.418278,-8.11624501e-16 64,0 L8,0 C3.581722,8.11624501e-16 -5.41083001e-16,3.581722 0,8 L0,64 C5.41083001e-16,68.418278 3.581722,72 8,72 Z" fill="#007EBB"/><path d="M62,62 L51.315625,62 L51.315625,43.8021149 C51.315625,38.8127542 49.4197917,36.0245323 45.4707031,36.0245323 C41.1746094,36.0245323 38.9300781,38.9261103 38.9300781,43.8021149 L38.9300781,62 L28.6333333,62 L28.6333333,27.3333333 L38.9300781,27.3333333 L38.9300781,32.0029283 C38.9300781,32.0029283 42.0260417,26.2742151 49.3825521,26.2742151 C56.7356771,26.2742151 62,30.7644705 62,40.051212 L62,62 Z M16.349349,22.7940133 C12.8420573,22.7940133 10,19.9296567 10,16.3970067 C10,12.8643566 12.8420573,10 16.349349,10 C19.8566406,10 22.6970052,12.8643566 22.6970052,16.3970067 C22.6970052,19.9296567 19.8566406,22.7940133 16.349349,22.7940133 Z M11.0325521,62 L21.769401,62 L21.769401,27.3333333 L11.0325521,27.3333333 L11.0325521,62 Z" fill="#FFF"/>
                </svg>  
              </a>
              <a href="https://www.openstreetmap.org/user/StpnGeorg" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">OpenStreetMap</span>
                <img src="https://www.openstreetmap.org/assets/osm_logo-4b074077c29e100f40ee64f5177886e36b570d4cc3ab10c7b263003d09642e3f.svg" height="24" width="24" alt="OpenStreetMap" className="size-6" />
              </a>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm/6 font-semibold text-white">Solutions</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a href="https://docs.distance.tools/tools/spreadsheet" className="text-sm/6 text-gray-400 hover:text-white">Distance for Spreadsheets</a>
                  </li>
                  <li>
                    <a href="https://docs.distance.tools/tools/api" className="text-sm/6 text-gray-400 hover:text-white">Distance API</a>
                  </li>
                  <li>
                    <a href="https://docs.distance.tools/tools/webapp" className="text-sm/6 text-gray-400 hover:text-white">Distance Webapp</a>
                  </li>
                  <li>
                    <a href="https://docs.distance.tools/tools/ai-agent" className="text-sm/6 text-gray-400 hover:text-white">Distance AI Agent</a>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm/6 font-semibold text-white">Support</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a href="https://docs.distance.tools" className="text-sm/6 text-gray-400 hover:text-white">Documentation</a>
                  </li>
                  <li>
                    <a href="https://docs.distance.tools/tools/api/endpoints" className="text-sm/6 text-gray-400 hover:text-white">Developers</a>
                  </li>
                  <li>
                    <a href="https://developers.distance.tools" className="text-sm/6 text-gray-400 hover:text-white">Dashboard</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm/6 font-semibold text-white">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a href="https://docs.distance.tools/legal/terms-of-service" className="text-sm/6 text-gray-400 hover:text-white">Terms of service</a>
                  </li>
                  <li>
                    <a href="https://docs.distance.tools/legal/privacy-policy" className="text-sm/6 text-gray-400 hover:text-white">Privacy policy</a>
                  </li>
                  <li>
                    <a href="https://docs.distance.tools/credits" className="text-sm/6 text-gray-400 hover:text-white">Credits</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-sm/6 text-gray-400">&copy; 2025 Stephan Georg. None rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;