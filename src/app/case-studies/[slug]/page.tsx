import CaseStudyDetailPage, {
  generateStaticParams as casesStaticParams,
  generateMetadata as casesMetadata,
} from "@/app/cases/[slug]/page";

export const generateStaticParams = casesStaticParams;
export const generateMetadata = casesMetadata;
export default CaseStudyDetailPage;
