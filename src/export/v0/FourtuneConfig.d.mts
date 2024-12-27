import type {RealmName} from "@fourtune-types/core/v1"

export type FourtuneConfig = {
	realm: {
		name: RealmName
		type: string
		options?: Record<string, unknown>
	}

	autogenerate: {
		files: Record<
			string, (session: unknown, path: string) => Promise<string>|string
		>
	}
}
