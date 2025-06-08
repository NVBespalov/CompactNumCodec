import cliProgress from 'cli-progress';

export function showProgressBar(length: number): void {
  const progressBar = new cliProgress.SingleBar(
    {},
    cliProgress.Presets.shades_classic,
  );
  progressBar.start(length, 0);
  const step = Math.max(1, Math.floor(length / 100));
  for (let i = 0; i < length; ++i) {
    if (i % step === 0 || i === length - 1) {
      progressBar.update(i + 1);
    }
  }
  progressBar.stop();
}
