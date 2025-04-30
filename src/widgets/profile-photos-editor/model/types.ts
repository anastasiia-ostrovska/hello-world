import { BaseSyntheticEvent } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { UploadedPhotos, UserWithInfo } from '@entities/user';

export interface UsePhotosEditorResult {
  user: UserWithInfo;
  methods: UseFormReturn<UploadedPhotos>;
  isActionDisabled: boolean;
  isApplyDisabled: boolean;
  handleApplyChanges: (e?: BaseSyntheticEvent) => Promise<void>;
}
