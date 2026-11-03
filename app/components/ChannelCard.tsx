import type { ChannelView } from "@/lib/view";

export default function ChannelCard({ channel, showCountry = false }: { channel: ChannelView; showCountry?: boolean }) {
  return (
    <article className="channel-card">
      <div className="channel-top">
        <div className="channel-name">
          {showCountry && <span title={channel.countryName}>{channel.flag} </span>}
          {channel.name}
        </div>
        <a className="watch-btn" href={channel.url} target="_blank" rel="noopener noreferrer" aria-label={channel.openAria}>
          {channel.openLabel}
        </a>
      </div>
      <div className="tags">
        <span className="tag">{channel.categoryLabel}</span>
        <span className={`tag ${channel.access === "free" ? "ok" : ""}`}>{channel.accessLabel}</span>
        <span className={`tag ${channel.geo === "national" ? "warn" : "ok"}`}>{channel.geoLabel}</span>
      </div>
      {channel.note && <p className="channel-note">{channel.note}</p>}
    </article>
  );
}
