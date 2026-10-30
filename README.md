# Islamic Pillars — 60-second animated motion graphics

A Remotion project for a vertical 1080x1920 video (9:16), 30fps, 60 seconds.

## Included
- Six animated 10-second scenes: intro + the five pillars
- English on-screen headings and Hinglish explanatory subtitles
- Hindi/Hinglish narration WAV clips generated with the local eSpeak Hindi voice (synthetic/robotic quality)
- Original synthesized ambient background music and soft sound bed
- Animated gradients, floating star pattern, icon motion, zoom, scene progress bars

## Run in GitHub Codespaces
```bash
npm install
npm run dev
```
Open the Remotion Studio preview. To render MP4:
```bash
npm run render
```
The rendered video will be at `out/islamic-pillars-60sec.mp4`.

## Important notes
- The included offline Hindi voice is synthetic and may sound robotic. For a natural AI voice, replace `public/audio/voice1.wav` through `voice6.wav` with Hindi TTS recordings, keeping each clip close to 10 seconds. Audio and scene boundaries are aligned to 10-second blocks.
- This is a stylized motion-graphics starter with illustrated/iconic visuals, not frame-by-frame character animation. It is designed so custom character SVG/PNG assets can be added later.
- Religious wording is an educational overview; review the narration before publishing.
