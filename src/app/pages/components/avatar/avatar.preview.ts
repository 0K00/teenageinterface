import { Component } from "@angular/core";

@Component({
  selector: "preview-button",
  standalone: true,
  template: ``
})

export class ButtonPreview {}

export const defaultCode = `import { CommonModule } from '@angular/common';
import { AvatarComponent } from "@teenageinterface/avatar";

@Component({
  selector: "pages-avatar",
  standalone: true,
  imports: [AvatarComponent],
  template: \` <tiAvatar imageUrl="picture_avatar.png" size="medium" /> \`,
})

export default class AvatarPage {}`;

export const defaultImports = `import { AvatarComponent } from '@teenageinterface/avatar';`;

export const defaultSkeleton = `<tiAvatar imageUrl="picture_avatar.png" size="medium" fallback="Ti" />`;

export const sizeCode = `import { CommonModule } from '@angular/common';
import { AvatarComponent } from "@teenageinterface/avatar";

@Component({
  selector: "pages-avatar",
  standalone: true,
  imports: [AvatarComponent],
  template: \` <tiAvatar imageUrl="picture_avatar.png" size="small" /> <tiAvatar imageUrl="picture_avatar.png" size="medium" /> <tiAvatar imageUrl="picture_avatar.png" size="large" /> \`,
})

export default class AvatarPage {}`;

export const fallbackCode = `import { CommonModule } from '@angular/common';
import { AvatarComponent } from "@teenageinterface/avatar";

@Component({
  selector: "pages-avatar",
  standalone: true,
  imports: [AvatarComponent],
  template: \` <tiAvatar fallback="Ti" size="medium" /> \`,
})

export default class AvatarPage {}`;

export const imageCode = `import { CommonModule } from '@angular/common';
import { AvatarComponent } from "@teenageinterface/avatar";

@Component({
  selector: "pages-avatar",
  standalone: true,
  imports: [AvatarComponent],
  template: \` <tiAvatar imageUrl="picture_avatar.png" size="medium" /> \`,
})

export default class AvatarPage {}`;

