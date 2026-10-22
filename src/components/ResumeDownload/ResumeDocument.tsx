import React from "react";
import {
  Document,
  Font,
  Link,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import type { ResumeData } from "../../types";
import { skillCategories } from "../../data/skillCategories";

// Built-in Helvetica keeps the PDF small, needs no font fetch, and stays ATS-friendly.
// Never hyphenate words across lines.
Font.registerHyphenationCallback((word) => [word]);

const colors = {
  ink: "#1c1b18",
  secondary: "#4a4640",
  tertiary: "#7c776e",
  accent: "#c2410c",
  line: "#d6d2c7",
};

const styles = StyleSheet.create({
  page: {
    paddingTop: 32,
    paddingBottom: 32,
    paddingHorizontal: 40,
    fontFamily: "Helvetica",
    fontSize: 9.25,
    lineHeight: 1.4,
    color: colors.ink,
  },
  name: {
    fontFamily: "Helvetica-Bold",
    fontSize: 22,
    lineHeight: 1.1,
    letterSpacing: -0.3,
  },
  title: {
    marginTop: 3,
    fontSize: 11,
    color: colors.accent,
  },
  contact: {
    marginTop: 6,
  },
  contactLine: {
    flexDirection: "row",
    color: colors.secondary,
  },
  contactItem: {
    color: colors.secondary,
    textDecoration: "none",
  },
  contactSeparator: {
    marginHorizontal: 5,
    color: colors.line,
  },
  section: {
    marginTop: 11,
  },
  sectionTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 9,
    letterSpacing: 1.2,
    textTransform: "uppercase",
    color: colors.accent,
    paddingBottom: 2,
    marginBottom: 6,
    borderBottomWidth: 1,
    borderBottomColor: colors.ink,
  },
  paragraph: {
    color: colors.secondary,
  },
  entry: {
    marginBottom: 7,
  },
  entryHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  entryTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 10.5,
  },
  entryDates: {
    fontSize: 8.5,
    color: colors.tertiary,
  },
  entrySubtitle: {
    color: colors.secondary,
    marginBottom: 2,
  },
  bullet: {
    flexDirection: "row",
    marginBottom: 1,
  },
  bulletMark: {
    width: 10,
    color: colors.accent,
  },
  bulletText: {
    flex: 1,
    color: colors.secondary,
  },
  label: {
    fontFamily: "Helvetica-Bold",
    color: colors.ink,
  },
  skillRow: {
    flexDirection: "row",
    marginBottom: 2,
  },
  skillLabel: {
    width: 118,
    fontFamily: "Helvetica-Bold",
  },
  skillValues: {
    flex: 1,
    color: colors.secondary,
  },
});

// "+919490375485" -> "+91 94903 75485"; other formats are shown as-is.
const formatPhone = (phone: string): string => {
  const match = phone.match(/^\+91(\d{5})(\d{5})$/);
  return match ? `+91 ${match[1]} ${match[2]}` : phone;
};

const stripProtocol = (url: string): string =>
  url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

const sentence = (text: string): string =>
  /[.!?]$/.test(text) ? text : `${text}.`;

const Bullet: React.FC<{ children: string }> = ({ children }) => (
  <View style={styles.bullet} wrap={false}>
    <Text style={styles.bulletMark}>•</Text>
    <Text style={styles.bulletText}>{children}</Text>
  </View>
);

const Section: React.FC<{
  title: string;
  children: React.ReactNode;
  wrap?: boolean;
}> = ({ title, children, wrap = true }) => (
  <View style={styles.section} wrap={wrap}>
    {/* minPresenceAhead keeps a heading from being stranded at the bottom of a page */}
    <Text style={styles.sectionTitle} minPresenceAhead={60}>
      {title}
    </Text>
    {children}
  </View>
);

interface ResumeDocumentProps {
  data: ResumeData;
}

const ResumeDocument: React.FC<ResumeDocumentProps> = ({ data }) => {
  const { personal } = data;

  const contactLines: Array<Array<{ text: string; href?: string }>> = [
    [
      { text: personal.location },
      { text: formatPhone(personal.phone), href: `tel:${personal.phone}` },
      { text: personal.email, href: `mailto:${personal.email}` },
    ],
    [
      { text: stripProtocol(personal.linkedin), href: personal.linkedin },
      { text: stripProtocol(personal.github), href: personal.github },
      { text: stripProtocol(personal.website), href: personal.website },
    ],
  ];

  return (
    <Document
      title={`${personal.name} - Resume`}
      author={personal.name}
      subject={personal.title}
      keywords={data.skills.backend.concat(data.skills.frontend).join(", ")}
    >
      <Page size="A4" style={styles.page}>
        <View>
          <Text style={styles.name}>{personal.name}</Text>
          <Text style={styles.title}>{personal.title}</Text>
          <View style={styles.contact}>
            {contactLines.map((line) => (
              <View key={line[0].text} style={styles.contactLine}>
                {line.map((item, index) => (
                  <React.Fragment key={item.text}>
                    {index > 0 && (
                      <Text style={styles.contactSeparator}>|</Text>
                    )}
                    {item.href ? (
                      <Link src={item.href} style={styles.contactItem}>
                        {item.text}
                      </Link>
                    ) : (
                      <Text>{item.text}</Text>
                    )}
                  </React.Fragment>
                ))}
              </View>
            ))}
          </View>
        </View>

        <Section title="Summary">
          <Text style={styles.paragraph}>{personal.summary}</Text>
        </Section>

        <Section title="Experience">
          {data.experience.map((job) => (
            <View key={`${job.role}-${job.start}`} style={styles.entry}>
              <View style={styles.entryHeader} minPresenceAhead={40}>
                <Text style={styles.entryTitle}>{job.role}</Text>
                <Text style={styles.entryDates}>
                  {job.start} – {job.end}
                </Text>
              </View>
              <Text style={styles.entrySubtitle}>
                {job.company}, {job.location}
              </Text>
              {job.highlights.map((item) => (
                <Bullet key={item}>{item}</Bullet>
              ))}
            </View>
          ))}
        </Section>

        <Section title="Projects">
          {data.projects.map((project) => (
            <View key={project.name} style={styles.entry} wrap={false}>
              <Text style={styles.entryTitle}>{project.name}</Text>
              <Text style={styles.paragraph}>{sentence(project.description)}</Text>
              <Text style={styles.paragraph}>
                <Text style={styles.label}>Impact: </Text>
                {sentence(project.outcome)}
              </Text>
              <Text style={styles.paragraph}>
                <Text style={styles.label}>Tech: </Text>
                {project.tech.join(", ")}
              </Text>
            </View>
          ))}
        </Section>

        <Section title="Skills" wrap={false}>
          {skillCategories.map((category) => (
            <View key={category.key} style={styles.skillRow} wrap={false}>
              <Text style={styles.skillLabel}>{category.name}</Text>
              <Text style={styles.skillValues}>
                {data.skills[category.key].join(", ")}
              </Text>
            </View>
          ))}
        </Section>

        <Section title="Education" wrap={false}>
          {data.education.map((item) => (
            <View key={item.institution} style={styles.entry} wrap={false}>
              <View style={styles.entryHeader}>
                <Text style={styles.entryTitle}>{item.degree}</Text>
                <Text style={styles.entryDates}>
                  {item.start} – {item.end}
                </Text>
              </View>
              <Text style={styles.entrySubtitle}>
                {item.institution}, {item.location}
              </Text>
            </View>
          ))}
        </Section>

      </Page>
    </Document>
  );
};

export default ResumeDocument;
