import type { Schema, Struct } from '@strapi/strapi';

export interface ElementsBadge extends Struct.ComponentSchema {
  collectionName: 'components_elements_badges';
  info: {
    displayName: 'Badge';
    icon: 'award';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsCareCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_care_cards';
  info: {
    displayName: 'Care Card';
    icon: 'grid';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Enumeration<['brain', 'heart']> &
      Schema.Attribute.DefaultTo<'brain'>;
    link_url: Schema.Attribute.String;
    location_label: Schema.Attribute.String;
    location_value: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsCityCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_city_cards';
  info: {
    description: '';
    displayName: 'City Card';
    icon: 'pinMap';
  };
  attributes: {
    city: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    link: Schema.Attribute.Component<'elements.cta-button', false> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsConditionCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_condition_cards';
  info: {
    displayName: 'Condition Card';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.Text;
    link: Schema.Attribute.String;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsCtaButton extends Struct.ComponentSchema {
  collectionName: 'components_elements_cta_buttons';
  info: {
    displayName: 'CTA Button';
    icon: 'cursor';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    style: Schema.Attribute.Enumeration<
      ['primary', 'secondary', 'outline', 'white']
    > &
      Schema.Attribute.DefaultTo<'primary'>;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsFeatureCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_feature_cards';
  info: {
    description: '';
    displayName: 'Feature Card';
    icon: 'dashboard';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsFooterColumn extends Struct.ComponentSchema {
  collectionName: 'components_elements_footer_columns';
  info: {
    displayName: 'Footer Column';
    icon: 'layout';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    links: Schema.Attribute.Component<'elements.nav-link', true>;
  };
}

export interface ElementsIconFeature extends Struct.ComponentSchema {
  collectionName: 'components_elements_icon_features';
  info: {
    displayName: 'Icon Feature';
    icon: 'bullet-list';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsListItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_list_items';
  info: {
    description: '';
    displayName: 'List Item';
    icon: 'bulletList';
  };
  attributes: {
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsModelCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_model_cards';
  info: {
    displayName: 'Model Card';
    icon: 'layer';
  };
  attributes: {
    badge: Schema.Attribute.String;
    button_label: Schema.Attribute.String;
    button_url: Schema.Attribute.String;
    model_name: Schema.Attribute.String & Schema.Attribute.Required;
    tagline: Schema.Attribute.String;
  };
}

export interface ElementsNavLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_nav_links';
  info: {
    displayName: 'Navigation Link';
    icon: 'link';
  };
  attributes: {
    has_submenu: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsSeo extends Struct.ComponentSchema {
  collectionName: 'components_elements_seos';
  info: {
    displayName: 'SEO Meta';
    icon: 'search';
  };
  attributes: {
    canonical_url: Schema.Attribute.String;
    keywords: Schema.Attribute.Text;
    meta_description: Schema.Attribute.Text;
    meta_title: Schema.Attribute.String;
    og_description: Schema.Attribute.Text;
    og_image: Schema.Attribute.Media<'images'>;
    og_title: Schema.Attribute.String;
    robots_follow: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    robots_index: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    schema_json: Schema.Attribute.JSON;
  };
}

export interface ElementsSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_social_links';
  info: {
    displayName: 'Social Link';
    icon: 'share';
  };
  attributes: {
    platform: Schema.Attribute.Enumeration<
      ['facebook', 'twitter', 'linkedin', 'instagram', 'youtube']
    > &
      Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsStage extends Struct.ComponentSchema {
  collectionName: 'components_elements_stages';
  info: {
    description: '';
    displayName: 'Stage';
    icon: 'layer';
  };
  attributes: {
    bullets: Schema.Attribute.Component<'elements.list-item', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsStatItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_stat_items';
  info: {
    displayName: 'Stat Item';
    icon: 'chart-bubble';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    number: Schema.Attribute.String & Schema.Attribute.Required;
    sublabel: Schema.Attribute.String;
  };
}

export interface LandingCityCards extends Struct.ComponentSchema {
  collectionName: 'components_landing_city_cardss';
  info: {
    description: '';
    displayName: 'City Cards';
    icon: 'pinMap';
  };
  attributes: {
    cards: Schema.Attribute.Component<'elements.city-card', true> &
      Schema.Attribute.Required;
    cta: Schema.Attribute.Component<'elements.cta-button', false>;
    cta_heading: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LandingConcernList extends Struct.ComponentSchema {
  collectionName: 'components_landing_concern_lists';
  info: {
    description: '';
    displayName: 'Concern List';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    items: Schema.Attribute.Component<'elements.list-item', true> &
      Schema.Attribute.Required;
    link: Schema.Attribute.Component<'elements.cta-button', false>;
  };
}

export interface LandingCtaBanner extends Struct.ComponentSchema {
  collectionName: 'components_landing_cta_banners';
  info: {
    description: '';
    displayName: 'CTA Banner';
    icon: 'cursor';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'elements.cta-button', true> &
      Schema.Attribute.Required;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    points: Schema.Attribute.Component<'elements.list-item', true>;
    style: Schema.Attribute.Enumeration<['light', 'dark', 'brand']> &
      Schema.Attribute.DefaultTo<'brand'>;
  };
}

export interface LandingExpertSpotlight extends Struct.ComponentSchema {
  collectionName: 'components_landing_expert_spotlights';
  info: {
    description: '';
    displayName: 'Expert Spotlight';
    icon: 'play';
  };
  attributes: {
    description: Schema.Attribute.Text;
    expert: Schema.Attribute.Relation<'oneToOne', 'api::doctor.doctor'>;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    quote: Schema.Attribute.Text;
    thumbnail: Schema.Attribute.Media<'images'>;
    video_title: Schema.Attribute.String;
    video_url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LandingFaq extends Struct.ComponentSchema {
  collectionName: 'components_landing_faqs';
  info: {
    description: '';
    displayName: 'FAQ';
    icon: 'question';
  };
  attributes: {
    description: Schema.Attribute.Text;
    faqs: Schema.Attribute.Relation<'oneToMany', 'api::faq.faq'>;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    output_schema: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface LandingFeatureCards extends Struct.ComponentSchema {
  collectionName: 'components_landing_feature_cardss';
  info: {
    description: '';
    displayName: 'Feature Cards';
    icon: 'apps';
  };
  attributes: {
    cards: Schema.Attribute.Component<'elements.feature-card', true> &
      Schema.Attribute.Required;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LandingHero extends Struct.ComponentSchema {
  collectionName: 'components_landing_heros';
  info: {
    description: '';
    displayName: 'Hero';
    icon: 'layout';
  };
  attributes: {
    background_image: Schema.Attribute.Media<'images'> &
      Schema.Attribute.Required;
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    mobile_image: Schema.Attribute.Media<'images'>;
    primary_cta: Schema.Attribute.Component<'elements.cta-button', false>;
    reviewer: Schema.Attribute.Relation<'oneToOne', 'api::doctor.doctor'>;
    reviewer_label: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Clinically reviewed by'>;
    secondary_cta: Schema.Attribute.Component<'elements.cta-button', false>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LandingImageGallery extends Struct.ComponentSchema {
  collectionName: 'components_landing_image_gallerys';
  info: {
    description: '';
    displayName: 'Image Gallery';
    icon: 'picture';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    images: Schema.Attribute.Media<'images', true> & Schema.Attribute.Required;
    subheading: Schema.Attribute.String;
  };
}

export interface LandingProcessStages extends Struct.ComponentSchema {
  collectionName: 'components_landing_process_stagess';
  info: {
    description: '';
    displayName: 'Process Stages';
    icon: 'layer';
  };
  attributes: {
    description: Schema.Attribute.Text;
    download_file: Schema.Attribute.Media<'files'>;
    download_label: Schema.Attribute.String;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    stages: Schema.Attribute.Component<'elements.stage', true> &
      Schema.Attribute.Required;
    subheading: Schema.Attribute.String;
  };
}

export interface LandingSteps extends Struct.ComponentSchema {
  collectionName: 'components_landing_stepss';
  info: {
    description: '';
    displayName: 'Steps';
    icon: 'numberList';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    steps: Schema.Attribute.Component<'elements.feature-card', true> &
      Schema.Attribute.Required;
  };
}

export interface LandingTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_landing_testimonialss';
  info: {
    description: '';
    displayName: 'Testimonials';
    icon: 'quote';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    testimonials: Schema.Attribute.Relation<
      'oneToMany',
      'api::testimonial.testimonial'
    >;
  };
}

export interface LandingVideoEmbed extends Struct.ComponentSchema {
  collectionName: 'components_landing_video_embeds';
  info: {
    description: '';
    displayName: 'Video Embed';
    icon: 'play';
  };
  attributes: {
    eyebrow: Schema.Attribute.String;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    poster: Schema.Attribute.Media<'images'>;
    start_seconds: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    transcript: Schema.Attribute.Text;
    video_url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LandingVideoList extends Struct.ComponentSchema {
  collectionName: 'components_landing_video_lists';
  info: {
    description: '';
    displayName: 'Video List';
    icon: 'play';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    videos: Schema.Attribute.Relation<
      'oneToMany',
      'api::expert-video.expert-video'
    >;
  };
}

export interface NavigationNavGroup extends Struct.ComponentSchema {
  collectionName: 'components_navigation_nav_groups';
  info: {
    displayName: 'nav-group';
  };
  attributes: {
    heading: Schema.Attribute.String;
    heading_url: Schema.Attribute.String;
    links: Schema.Attribute.Component<'navigation.nav-link', true>;
  };
}

export interface NavigationNavItem extends Struct.ComponentSchema {
  collectionName: 'components_navigation_nav_items';
  info: {
    displayName: 'nav-item';
  };
  attributes: {};
}

export interface NavigationNavLink extends Struct.ComponentSchema {
  collectionName: 'components_navigation_nav_links';
  info: {
    displayName: 'nav-link';
  };
  attributes: {
    label: Schema.Attribute.String;
    style: Schema.Attribute.Enumeration<['default', 'accent', 'muted']>;
    url: Schema.Attribute.String;
  };
}

export interface SectionsAboutSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_about_sections';
  info: {
    displayName: 'About Section';
    icon: 'information';
  };
  attributes: {
    badge: Schema.Attribute.String;
    body: Schema.Attribute.Blocks;
    button_label: Schema.Attribute.String;
    button_url: Schema.Attribute.String;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    icon_features: Schema.Attribute.Component<'elements.icon-feature', true>;
    note: Schema.Attribute.String;
    stats: Schema.Attribute.Component<'elements.stat-item', true>;
  };
}

export interface SectionsBlogPreviewSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_blog_preview_sections';
  info: {
    displayName: 'Blog Preview Section';
  };
  attributes: {
    blog_posts: Schema.Attribute.Relation<
      'oneToMany',
      'api::blog-post.blog-post'
    >;
    description: Schema.Attribute.String;
    heading: Schema.Attribute.String;
  };
}

export interface SectionsCarePathwaysSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_care_pathways_sections';
  info: {
    displayName: 'Care Pathways Section';
    icon: 'apps';
  };
  attributes: {
    badge: Schema.Attribute.String;
    cards: Schema.Attribute.Component<'elements.care-card', true>;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsConditionCardsSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_condition_cards_sections';
  info: {
    displayName: 'Condition Cards Section';
    icon: 'grid';
  };
  attributes: {
    cards: Schema.Attribute.Component<'elements.condition-card', true>;
    heading: Schema.Attribute.String;
  };
}

export interface SectionsContactFormSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_contact_form_sections';
  info: {
    displayName: 'Contact Form Section';
    icon: 'mail';
  };
  attributes: {
    appointment_types: Schema.Attribute.JSON;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsEmergencySection extends Struct.ComponentSchema {
  collectionName: 'components_sections_emergency_sections';
  info: {
    displayName: 'Emergency Section (MERA)';
    icon: 'phone';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.cta-button', false>;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    disclaimer: Schema.Attribute.Text;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    icon_features: Schema.Attribute.Component<'elements.icon-feature', true>;
    tagline: Schema.Attribute.String;
  };
}

export interface SectionsFaqSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_faq_sections';
  info: {
    displayName: 'FAQ Section';
    icon: 'question';
  };
  attributes: {
    faqs: Schema.Attribute.Relation<'oneToMany', 'api::faq.faq'>;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    show_view_all: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface SectionsHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_hero_sections';
  info: {
    displayName: 'Hero Section';
    icon: 'star';
  };
  attributes: {
    background_image: Schema.Attribute.Media<'images'>;
    cta: Schema.Attribute.Component<'elements.cta-button', false>;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    stats: Schema.Attribute.Component<'elements.stat-item', true>;
    subheading: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface SectionsInsuranceSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_insurance_sections';
  info: {
    displayName: 'Insurance Section';
    icon: 'shield';
  };
  attributes: {
    badge: Schema.Attribute.String;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    partners: Schema.Attribute.Relation<
      'oneToMany',
      'api::insurance-partner.insurance-partner'
    >;
  };
}

export interface SectionsLocationsSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_locations_sections';
  info: {
    displayName: 'Locations Section';
    icon: 'pin';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    locations: Schema.Attribute.Relation<'oneToMany', 'api::location.location'>;
  };
}

export interface SectionsRecoveryStoriesSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_recovery_stories_sections';
  info: {
    displayName: 'Recovery Stories Section';
  };
  attributes: {
    badge: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    testimonials: Schema.Attribute.Relation<
      'oneToMany',
      'api::testimonial.testimonial'
    >;
  };
}

export interface SectionsTeamSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_team_sections';
  info: {
    displayName: 'Team Section';
    icon: 'user';
  };
  attributes: {
    featured_doctors: Schema.Attribute.Relation<
      'oneToMany',
      'api::doctor.doctor'
    >;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    subheading: Schema.Attribute.Text;
  };
}

export interface SectionsTestimonialSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_testimonial_sections';
  info: {
    displayName: 'Testimonial Section';
    icon: 'quote';
  };
  attributes: {
    badge: Schema.Attribute.String;
    description: Schema.Attribute.String;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    youtube_url: Schema.Attribute.String;
  };
}

export interface SectionsTreatmentModelSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_treatment_model_sections';
  info: {
    displayName: 'Treatment Model Section';
    icon: 'heart';
  };
  attributes: {
    banner_button_label: Schema.Attribute.String;
    banner_button_url: Schema.Attribute.String;
    banner_heading: Schema.Attribute.String;
    cta: Schema.Attribute.Component<'elements.cta-button', false>;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'>;
    models: Schema.Attribute.Component<'elements.model-card', true>;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'elements.badge': ElementsBadge;
      'elements.care-card': ElementsCareCard;
      'elements.city-card': ElementsCityCard;
      'elements.condition-card': ElementsConditionCard;
      'elements.cta-button': ElementsCtaButton;
      'elements.feature-card': ElementsFeatureCard;
      'elements.footer-column': ElementsFooterColumn;
      'elements.icon-feature': ElementsIconFeature;
      'elements.list-item': ElementsListItem;
      'elements.model-card': ElementsModelCard;
      'elements.nav-link': ElementsNavLink;
      'elements.seo': ElementsSeo;
      'elements.social-link': ElementsSocialLink;
      'elements.stage': ElementsStage;
      'elements.stat-item': ElementsStatItem;
      'landing.city-cards': LandingCityCards;
      'landing.concern-list': LandingConcernList;
      'landing.cta-banner': LandingCtaBanner;
      'landing.expert-spotlight': LandingExpertSpotlight;
      'landing.faq': LandingFaq;
      'landing.feature-cards': LandingFeatureCards;
      'landing.hero': LandingHero;
      'landing.image-gallery': LandingImageGallery;
      'landing.process-stages': LandingProcessStages;
      'landing.steps': LandingSteps;
      'landing.testimonials': LandingTestimonials;
      'landing.video-embed': LandingVideoEmbed;
      'landing.video-list': LandingVideoList;
      'navigation.nav-group': NavigationNavGroup;
      'navigation.nav-item': NavigationNavItem;
      'navigation.nav-link': NavigationNavLink;
      'sections.about-section': SectionsAboutSection;
      'sections.blog-preview-section': SectionsBlogPreviewSection;
      'sections.care-pathways-section': SectionsCarePathwaysSection;
      'sections.condition-cards-section': SectionsConditionCardsSection;
      'sections.contact-form-section': SectionsContactFormSection;
      'sections.emergency-section': SectionsEmergencySection;
      'sections.faq-section': SectionsFaqSection;
      'sections.hero-section': SectionsHeroSection;
      'sections.insurance-section': SectionsInsuranceSection;
      'sections.locations-section': SectionsLocationsSection;
      'sections.recovery-stories-section': SectionsRecoveryStoriesSection;
      'sections.team-section': SectionsTeamSection;
      'sections.testimonial-section': SectionsTestimonialSection;
      'sections.treatment-model-section': SectionsTreatmentModelSection;
    }
  }
}
