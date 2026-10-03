export type Testimonial = {
  id: string;
  quote: string;
  clientName: string;
  clientRole?: string;
  company?: string;
  project?: string;
  avatar?: {
    src: string;
    alt: string;
  };
  source?: {
    url: string;
    label?: string;
  };
};

/**
 * Add only authentic testimonials that are approved for public use.
 * The homepage section remains hidden while this array is empty.
 */
export const testimonials: Testimonial[] = [];
