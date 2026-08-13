// Assets stay in the original /assets directory, exposed through Vite's publicDir.
const asset = (name) => `/${encodeURIComponent(name)}`

export const images = {
  logo: asset('logo.png'),
  headerMark: asset('Tuff-logo-header.png'),
  headerLogoText: asset('tuffore-header-logo-text.png'),
  hero: asset('hero-image.png'),
  athlete: asset('athelete image.png'),
  missionLeft: asset('side image.png'),
  missionRight: asset('backside image.png'),
  playButton: asset('play-button.png'),
  patternDark: asset('Vector.png'),
  patternLight: asset('white vector.png'),
}
