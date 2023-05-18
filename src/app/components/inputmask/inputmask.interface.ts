import { TemplateRef } from '@angular/core';

export type Caret = { begin: number; end: number };
/**
 * Defines valid templates in InputMask.
 * @group Templates
 */
export interface InputMaskTemplates {
    /**
     * Custom clear icon template.
     */
    clearicon: TemplateRef<any> | null;
}