import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tiAvatar',
  imports: [CommonModule],
  templateUrl: './avatar.component.html',
  styleUrl: './tailwind.css'
})
export class AvatarComponent {
  @Input() imageUrl: string | null = null;
  @Input() fallback: string = "A";
  @Input() size: "small" | "medium" | "large" = "medium";

  public imageValid: boolean = true;

  private small: { container: string[], image: string[], fallback: string[] } = {
    container: [
      "w-6",
      "h-6"
    ],
    image: [],
    fallback: [
      "text-xs",
      "font-normal"
    ]
  };

  private medium: { container: string[], image: string[], fallback: string[] } = {
    container: [
      "w-12",
      "h-12"
    ],
    image: [],
    fallback: [
      "text-xl",
      "font-medium"
    ]
  };

  private large: { container: string[], image: string[], fallback: string[] } = {
    container: [
      "w-20",
      "h-20"
    ],
    image: [],
    fallback: [
      "text-4xl",
      "font-semibold"
    ]
  }

  private commonClasses: { container: string[], image: string[], fallback: string[] } = {
    container: [
      "overflow-hidden",
      "rounded-full"
    ],
    image: [
      "w-full",
      "h-full"
    ],
    fallback: [
      "w-full",
      "h-full",
      "flex",
      "items-center",
      "justify-center",
      "bg-blue-800",
      "dark:bg-blue-600",
      "text-neutral-50"
    ]
  }

    public get classes(): { container: string[], image: string[], fallback: string[] } {
      const classMap: { [key in typeof this.size]: { container: string[], image: string[], fallback: string[] } } = {
        small: {
          container: this.small.container,
          image: this.small.image,
          fallback: this.small.fallback
        },
        medium: {
          container: this.medium.container,
          image: this.medium.image,
          fallback: this.medium.fallback
        },
        large: {
          container: this.large.container,
          image: this.large.image,
          fallback: this.large.fallback
        }
      };

      return {
        container: [
          ...this.commonClasses.container,
          ...(classMap[this.size]?.container || classMap.medium.container),
        ],
        image: [
          ...this.commonClasses.image,
          ...(classMap[this.size]?.image || classMap.medium.image),
        ],
        fallback: [
          ...this.commonClasses.fallback,
          ...(classMap[this.size]?.fallback || classMap.medium.fallback),
        ]
      };
    }

  public handleImageError() {
    this.imageValid = false;
  }
}
