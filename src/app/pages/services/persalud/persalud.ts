import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-persalud',
  imports: [CommonModule, FormsModule ],
  templateUrl: './persalud.html',
  styleUrl: './persalud.scss'
})
export class PersaludComponent {
@ViewChild('videoEl', { static: false }) videoEl!: ElementRef<HTMLVideoElement>;

  isPlaying = false;
  isPaused = false;

  currentTime = '0:00';
  duration = '0:00';
  currentTimeValue = 0;
  videoDuration = 0;

  togglePlay(event: Event) {
    event.stopPropagation();
    const video = this.videoEl.nativeElement;

    if (!this.isPlaying) {
      video.play();
      this.videoDuration = video.duration;
      this.duration = this.formatTime(video.duration);
      this.isPlaying = true;
      this.isPaused = false;
    } else if (this.isPaused) {
      video.play();
      this.isPaused = false;
    } else {
      video.pause();
      this.isPaused = true;
    }
  }

  updateProgress() {
    const video = this.videoEl.nativeElement;
    this.currentTimeValue = video.currentTime;
    this.currentTime = this.formatTime(video.currentTime);
    this.duration = this.formatTime(video.duration);
  }

  seekVideo(event: Event) {
    const input = event.target as HTMLInputElement;
    const video = this.videoEl.nativeElement;
    video.currentTime = +input.value;
  }

  onEnded() {
    this.isPlaying = false;
    this.isPaused = false;
    this.currentTimeValue = 0;
  }

  formatTime(seconds: number): string {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s < 10 ? '0' + s : s}`;
  }
}
